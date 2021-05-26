import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
const fac = ts.factory;
export const removeEmptyElses = (t: TransformTraversalControl): ts.Node => {
    const node = t.visitChildren();

    if (
        ts.isIfStatement(node) &&
        node.elseStatement &&
        ts.isBlock(node.elseStatement) &&
        (node.elseStatement.statements.every((s) => ts.isEmptyStatement(s)) ||
            node.elseStatement.statements.length === 0)
    ) {
        return fac.updateIfStatement(
            node,
            node.expression,
            node.thenStatement,
            undefined
        );
    }
    return node;
};
