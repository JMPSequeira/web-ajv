import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";

const fac = ts.factory;
export const removeEmptyStatements = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.visitChildren();
    if (ts.isBlock(node)) {
        return fac.updateBlock(
            node,
            node.statements.filter((s) => !ts.isEmptyStatement(s))
        );
    }
    return node;
};
