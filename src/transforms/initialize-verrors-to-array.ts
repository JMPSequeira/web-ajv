import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { getTypeNode, isIdentifier } from "../steps/utils";

const fac = ts.factory;
export const initializeVErrorsToArray = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;

    if (ts.isVariableDeclaration(node) && node.name.getText() === "vErrors") {
        const typeNode = getTypeNode("WebAjvError[]");
        return fac.updateVariableDeclaration(
            node,
            node.name,
            node.exclamationToken,
            typeNode,
            fac.createArrayLiteralExpression()
        );
    } else if (ts.isBinaryExpression(node)) {
        const isNull =
            node.right.getText() === "null" || node.left.getText() === "null";

        if (isNull) {
            if (isIdentifier(node.left, "vErrors")) {
                if (node.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
                    return fac.createBinaryExpression(
                        node.left,
                        node.operatorToken,
                        fac.createArrayLiteralExpression()
                    );
                } else if (
                    node.operatorToken.kind ===
                    ts.SyntaxKind.EqualsEqualsEqualsToken
                ) {
                    return fac.createPrefixUnaryExpression(
                        ts.SyntaxKind.ExclamationToken,
                        fac.createPropertyAccessExpression(node.left, "length")
                    );
                }
            }
        }
    }

    return t.visitChildren();
};
