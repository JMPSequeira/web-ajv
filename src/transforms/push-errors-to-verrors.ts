import ts from "typescript";
import { TransformTraversalControl } from "ts-morph";
import { isIdentifier } from "../steps/utils";

export const pushErrorsToVErrors = (t: TransformTraversalControl): ts.Node => {
    const node = t.currentNode;
    if (
        ts.isBlock(node) &&
        node.statements.length &&
        node.statements.every((s) => !ts.isEmptyStatement(s))
    ) {
        const [first, statement, errorIncrement, ...rest] = node.statements;

        const previous = first
            ?.getChildren()
            .find((c) => ts.isVariableDeclarationList(c));

        let declaration: ts.VariableDeclaration | undefined;

        if (
            previous &&
            ts.isVariableDeclarationList(previous) &&
            statement &&
            ts.isIfStatement(statement) &&
            statement.expression.getChildAt(0)?.getText() === "vErrors" &&
            errorIncrement &&
            ts.isExpressionStatement(errorIncrement) &&
            ts.isPostfixUnaryExpression(errorIncrement.expression) &&
            isIdentifier(errorIncrement.expression.operand, "errors")
        ) {
            declaration = previous.declarations[0];
        }
        if (declaration) {
            const initializer = declaration.initializer;
            if (initializer) {
                const propertyAccess =
                    ts.factory.createPropertyAccessExpression(
                        ts.factory.createIdentifier("vErrors"),
                        "push"
                    );

                const call = ts.factory.createCallExpression(
                    propertyAccess,
                    undefined,
                    [initializer]
                );
                return ts.factory.createBlock([
                    ts.factory.createExpressionStatement(
                        ts.factory.createBinaryExpression(
                            ts.factory.createIdentifier("errors"),
                            ts.SyntaxKind.EqualsToken,
                            call
                        )
                    ),
                    ...rest,
                ]);
            }
        }
    }

    return t.visitChildren();
};
