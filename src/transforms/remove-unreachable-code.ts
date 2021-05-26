import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
const fac = ts.factory;
export const removeUnreachableCode = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.visitChildren();

    if (ts.isBlock(node)) {
        let found = false;
        return fac.updateBlock(
            node,
            node.statements.filter((s) => {
                if (!found) {
                    if (ts.isReturnStatement(s)) {
                        found = true;
                    }
                    return true;
                }
                return false;
            })
        );
    }
    return node;
};
