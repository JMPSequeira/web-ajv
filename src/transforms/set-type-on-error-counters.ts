import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { isIdentifier } from "../steps/utils";

const fac = ts.factory;
export const setTypeOnErrorCounters = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;

    if (ts.isVariableDeclaration(node)) {
        const error = node.name;
        if (isIdentifier(error, /errs\d+$/)) {
            return fac.createVariableDeclaration(
                error,
                undefined,
                fac.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                node.initializer
            );
        }
    }
    return t.visitChildren();
};
