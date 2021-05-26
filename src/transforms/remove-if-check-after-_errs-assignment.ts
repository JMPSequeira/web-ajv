import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { isIdentifier } from "../steps/utils";
const fac = ts.factory;
export const removeIfCheckAfter_errsAssignment = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;

    if (ts.isBlock(node)) {
        const block = t.visitChildren() as ts.Block;

        return fac.updateBlock(block, filterStatements(block.statements));
    }
    return t.visitChildren();
};

function filterStatements(
    statements: ts.NodeArray<ts.Statement>
): readonly ts.Statement[] {
    let lastLeft = "";
    let lastRight = "";
    const newStatements = statements.reduce((stmts, node) => {
        let decl: ts.VariableDeclaration | undefined;
        if (
            lastLeft &&
            ts.isIfStatement(node) &&
            ts.isBlock(node.thenStatement) &&
            !node.elseStatement &&
            ts.isBinaryExpression(node.expression) &&
            node.expression.operatorToken.kind ===
                ts.SyntaxKind.EqualsEqualsEqualsToken &&
            ((isIdentifier(node.expression.left, lastLeft) &&
                node.expression.right.getText() === lastRight) ||
                (isIdentifier(node.expression.right, lastLeft) &&
                    node.expression.left.getText() === lastRight))
        ) {
            return stmts.concat(node.thenStatement.statements);
        } else if (
            ts.isVariableStatement(node) &&
            (decl = node.declarationList.declarations[0]) &&
            ts.isIdentifier(decl.name)
        ) {
            lastLeft = decl.name.text;
            lastRight = decl.initializer?.getText() || "";
        } else {
            lastLeft = "";
        }
        stmts.push(node);

        return stmts;
    }, [] as ts.Statement[]);
    return newStatements;
}
