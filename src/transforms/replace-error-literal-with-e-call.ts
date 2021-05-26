import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { errorProperties } from "../steps/utils";
const fac = ts.factory;
export const replaceErrorLiteralWithECall = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;

    if (
        ts.isObjectLiteralExpression(node) &&
        !ts.isParameter(node.parent) &&
        allPropertiesBelongToErrorObject(node)
    ) {
        const args = node.properties.map((p) =>
            ts.isPropertyAssignment(p)
                ? p.initializer
                : fac.createIdentifier(p.getText())
        );

        return fac.createCallExpression(
            fac.createIdentifier("e"),
            undefined,
            args
        );
    }
    return t.visitChildren();
};

function allPropertiesBelongToErrorObject(
    node: ts.ObjectLiteralExpression
): boolean {
    return node.properties.every(
        (p) =>
            (ts.isPropertyAssignment(p) ||
                ts.isShorthandPropertyAssignment(p)) &&
            errorProperties.includes(p.name.getText())
    );
}
