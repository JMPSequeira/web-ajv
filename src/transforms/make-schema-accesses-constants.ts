import ts from "typescript";
import { TransformTraversalControl } from "ts-morph";
import { isMatchableIdentifier } from "../steps/utils";

const fac = ts.factory;
let constants: { [x: string]: { [x: string]: string } } = {};
export const makeSchemaAccessConstants = function (
    t: TransformTraversalControl
): ts.Node {
    const node = t.currentNode;

    if (ts.isSourceFile(node)) {
        constants = {};

        const newNode = t.visitChildren() as ts.SourceFile;

        if (!Object.keys(constants).length) {
            return newNode;
        }

        const constantsDeclaration = fac.createVariableStatement(
            undefined,
            fac.createVariableDeclarationList(
                [
                    fac.createVariableDeclaration(
                        "_constants",
                        undefined,
                        undefined,
                        fac.createObjectLiteralExpression(
                            Object.keys(constants).map((k: string) => {
                                const value = constants[k];
                                if (value) {
                                    return fac.createPropertyAssignment(
                                        k,
                                        fac.createObjectLiteralExpression(
                                            createJsonProperties(value)
                                        )
                                    );
                                }
                                throw Error("Unexpected");
                            })
                        )
                    ),
                ],
                ts.NodeFlags.Const
            )
        );
        return fac.updateSourceFile(newNode, [
            constantsDeclaration,
            ...newNode.statements,
        ]);
    } else if (
        ts.isPropertyAccessExpression(node) ||
        ts.isElementAccessExpression(node)
    ) {
        let expression = node.expression;
        let propertyChain = getAccessText(node);

        while (
            expression &&
            (ts.isPropertyAccessExpression(expression) ||
                ts.isElementAccessExpression(expression))
        ) {
            propertyChain = getAccessText(expression) + propertyChain;
            expression = expression.expression;
        }

        const result = getSchemaReference(expression, propertyChain);

        if (result) {
            return result;
        }
    }

    return t.visitChildren();
};

function getAccessText(
    node: ts.PropertyAccessExpression | ts.ElementAccessExpression
) {
    return ts.isPropertyAccessExpression(node)
        ? `.${node.name.getText()}`
        : `[${node.argumentExpression.getText()}]`;
}
function getSchemaReference(node: ts.Node, propertyPath: string) {
    if (isMatchableIdentifier(node, /^schema\d+$/)) {
        const source = node.getSourceFile();
        const schema = node.getText();

        const declaration = (
            source.statements.find(
                (s) =>
                    ts.isVariableStatement(s) &&
                    s.declarationList.declarations[0] &&
                    s.declarationList.declarations[0].name.getText() ===
                        schema &&
                    s.declarationList.declarations[0].initializer
            ) as ts.VariableStatement
        ).declarationList.declarations[0] as ts.VariableDeclaration | undefined;
        if (declaration && declaration.initializer) {
            let schemaConstant = constants[schema];

            if (!schemaConstant) {
                schemaConstant = constants[schema] = {};
            }

            if (!schemaConstant[propertyPath]) {
                schemaConstant[propertyPath] = eval(
                    `(function () {const ${schema} = ${declaration.initializer.getText()}; return ${schema}${propertyPath};})()`
                );
            }
            return fac.createElementAccessExpression(
                fac.createPropertyAccessExpression(
                    fac.createIdentifier("_constants"),
                    schema
                ),
                fac.createStringLiteral(propertyPath)
            );
        }
        throw Error("Unexpected");
    }
    return undefined;
}

function createJsonProperties(arg0: {
    [x: string]: string;
}): readonly ts.ObjectLiteralElementLike[] {
    return Object.keys(arg0).map((k) => {
        const prop = arg0[k];
        if (prop !== undefined) {
            return fac.createPropertyAssignment(
                fac.createComputedPropertyName(fac.createStringLiteral(k)),
                createJsonAst(prop)
            );
        }
        throw Error("Unexpected");
    });
}

function createJsonAst(value: unknown): ts.Expression {
    if (value === null) {
        return fac.createNull();
    } else if (Array.isArray(value)) {
        return fac.createArrayLiteralExpression(
            value.map((p) => createJsonAst(p))
        );
    } else if (typeof value === "number") {
        return fac.createNumericLiteral(value);
    } else if (typeof value === "boolean") {
        return value ? fac.createTrue() : fac.createFalse();
    } else if (typeof value === "string") {
        return fac.createStringLiteral(value);
    } else if (typeof value === "object" && value !== null) {
        return fac.createObjectLiteralExpression(
            Object.keys(value).map((k) => {
                const prop = (value as { [x: string]: unknown })[k];
                if (prop) {
                    return fac.createPropertyAssignment(k, createJsonAst(prop));
                }
                throw Error("Unexpected");
            })
        );
    }
    throw Error("Unexpected");
}
