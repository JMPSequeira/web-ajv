import ts from "typescript";
import { TransformTraversalControl } from "ts-morph";
import { isIdentifier, isVariableStatement } from "../steps/utils";

const fac = ts.factory;
let renames: { [x: string]: string } = {};
export const renameSchemaConstants = function (
    t: TransformTraversalControl
): ts.Node {
    const node = t.currentNode;

    if (ts.isSourceFile(node)) {
        renames = getNamedDeclaration(node);
        return t.visitChildren();
    } else if (isVariableStatement(node, /^schema\d+$/)) {
        const declaration = node.declarationList.declarations[0];
        const rename = renames[declaration.name.getText()];
        if (rename && declaration.initializer) {
            return fac.createVariableStatement(
                undefined,
                fac.createVariableDeclarationList(
                    [
                        fac.createVariableDeclaration(
                            fac.createIdentifier(rename),
                            undefined,
                            undefined,
                            fac.createAsExpression(
                                declaration.initializer,
                                fac.createTypeReferenceNode(
                                    fac.createIdentifier("const"),
                                    undefined
                                )
                            )
                        ),
                    ],
                    ts.NodeFlags.Const
                )
            );
        }
    } else if (isIdentifier(node, /^schema\d+$/)) {
        const rename = renames[node.getText()];
        if (rename) {
            return fac.createIdentifier(rename);
        }
    }
    return t.visitChildren();
};

function getNamedDeclaration(source: ts.SourceFile) {
    return source.statements.reduce((m, s) => {
        if (isVariableStatement(s, /^schema\d+/)) {
            const schemaLiteral =
                s.declarationList.declarations[0].initializer?.getText();
            if (schemaLiteral) {
                const schema = JSON.parse(schemaLiteral);
                const id = schema.$id;
                if (id) {
                    const original =
                        s.declarationList.declarations[0].name.text;
                    m[original] = `schema${id}`;
                }
            }
        }

        return m;
    }, {} as { [x: string]: string });
}
