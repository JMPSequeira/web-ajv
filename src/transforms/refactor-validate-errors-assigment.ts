import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { isIdentifier } from "../steps/utils";

const fac = ts.factory;
export const refactorValidateErrorsToVErrors = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;
    if (
        ts.isBinaryExpression(node) &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        isIdentifier(node.right, "vErrors") &&
        ts.isPropertyAccessExpression(node.left) &&
        /^validate[^.]+\.errors/.test(node.left.getText())
    ) {
        const left = node.left;
        const right = node.right;

        return fac.createBinaryExpression(
            left,
            node.operatorToken,
            fac.createConditionalExpression(
                fac.createPropertyAccessExpression(right, "length"),
                undefined,
                right,
                undefined,
                fac.createIdentifier("undefined")
            )
        );
    }
    return t.visitChildren();
};
