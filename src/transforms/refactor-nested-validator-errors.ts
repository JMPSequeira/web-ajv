import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";

const fac = ts.factory;
export const refactorNestedValidatorErrors = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;
    if (ts.isBinaryExpression(node)) {
        if (ts.isIfStatement(node.parent)) {
            return t.visitChildren();
        }
        const left = node.left;

        if (left.getText() === "vErrors") {
            const right = node.right;
            const rightText = right.getText();

            const nestedValidatorName = getNestedValidatorName(rightText);

            if (nestedValidatorName) {
                const nestedErrorsAccess = fac.createPropertyAccessExpression(
                    fac.createIdentifier(nestedValidatorName),
                    "errors"
                );

                return fac.createCallExpression(
                    ts.factory.createPropertyAccessExpression(
                        fac.createIdentifier("vErrors"),
                        "push"
                    ),
                    undefined,
                    [
                        fac.createSpreadElement(
                            fac.createParenthesizedExpression(
                                fac.createBinaryExpression(
                                    nestedErrorsAccess,
                                    ts.SyntaxKind.BarBarToken,
                                    fac.createArrayLiteralExpression()
                                )
                            )
                        ),
                    ]
                );
            }
        }
    }
    return t.visitChildren();
};

function getNestedValidatorName(rightText: string): string | undefined {
    const parts = /\? ?([^.]+)\.errors/.exec(rightText);
    if (parts) {
        return parts[1];
    }
    return undefined;
}
