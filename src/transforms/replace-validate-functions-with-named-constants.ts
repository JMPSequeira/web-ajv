import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { getTypeNode, isIdentifier } from "../steps/utils";

const fac = ts.factory;
const testRegex = /^validate\d+$/;

let renames: { [x: string]: { newName: string; removableIndex: number } } = {};

export const replaceValidateFunctionsWithNamedConstants = function (
    t: TransformTraversalControl
): ts.Node {
    if (ts.isSourceFile(t.currentNode)) {
        const source = t.currentNode;

        renames = getNamedDeclaration(source);

        const renamedSource = t.visitChildren() as ts.SourceFile;

        return fac.updateSourceFile(
            renamedSource,
            updateStatements(renamedSource.statements)
        );
    } else if (ts.isIdentifier(t.currentNode)) {
        const rename = renames[t.currentNode.text];
        if (rename) {
            return fac.createIdentifier(rename.newName);
        }
        return t.currentNode;
    }
    return t.visitChildren();
};

function getNamedDeclaration(source: ts.SourceFile) {
    return source.statements.reduce((m, s, i) => {
        if (
            ts.isExpressionStatement(s) &&
            ts.isBinaryExpression(s.expression) &&
            ts.isPropertyAccessExpression(s.expression.left) &&
            isIdentifier(s.expression.left.expression, "exports") &&
            isIdentifier(s.expression.right, testRegex)
        ) {
            m[s.expression.right.text] = {
                newName: s.expression.left.name.text,
                removableIndex: i,
            };
        }
        return m;
    }, {} as { [x: string]: { newName: string; removableIndex: number } });
}
function updateStatements(
    statements: ts.NodeArray<ts.Statement>
): readonly ts.Statement[] {
    const remove = Object.keys(renames).map((k) => {
        const rename = renames[k];
        if (rename) return rename.removableIndex;
        return -1;
    });
    const newNames = Object.keys(renames).reduce((m, k) => {
        const rename = renames[k];
        if (rename) {
            m[rename.newName] = true;
        }
        return m;
    }, {} as { [x: string]: true });

    return statements
        .filter((_, i) => !remove.includes(i))
        .map((s) => {
            if (
                ts.isFunctionDeclaration(s) &&
                s.name &&
                newNames[s.name.text] &&
                s.body &&
                s.parameters[0]
            ) {
                const isAsync = s.modifiers?.some(
                    (s) => s.kind === ts.SyntaxKind.AsyncKeyword
                );

                const type = getTypeNode(
                    isAsync ? "AsyncAjvValidationFn" : "AjvValidationFn"
                );

                const declaration = [
                    fac.createVariableDeclaration(
                        s.name.text,
                        undefined,
                        type,
                        fac.createArrowFunction(
                            isAsync
                                ? fac.createModifiersFromModifierFlags(
                                      ts.ModifierFlags.Async
                                  )
                                : undefined,
                            undefined,
                            [
                                fac.createParameterDeclaration(
                                    undefined,
                                    undefined,
                                    undefined,
                                    "data",
                                    undefined,
                                    getTypeNode("any")
                                ),
                                ...s.parameters.slice(1),
                            ],
                            undefined,
                            undefined,
                            fac.createBlock(s.body.statements)
                        )
                    ),
                ];

                return fac.createVariableStatement(
                    undefined,
                    fac.createVariableDeclarationList(
                        declaration,
                        ts.NodeFlags.Const
                    )
                );
            }
            return s;
        })
        .filter((s) => s !== undefined) as ts.Statement[];
}
