import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import { isIdentifier, isVariableStatement } from "../steps/utils";
const fac = ts.factory;
export const removeUnused_errs = (t: TransformTraversalControl): ts.Node => {
    const node = t.visitChildren();
    if (ts.isBlock(node)) {
        return fac.updateBlock(node, filterStatements(node.statements));
    }
    return node;
};

function filterStatements(
    statements: ts.NodeArray<ts.Statement>
): readonly ts.Statement[] {
    const errName: string[] = [];
    let errorIndex = -1;
    const removableIndexes: number[] = [];
    let remove = false;
    statements.forEach((statement, i) => {
        if (isVariableStatement(statement, /_errs\d+/)) {
            errName.push(statement.declarationList.declarations[0].name.text);
            errorIndex = i;
            removableIndexes.push(i);
        } else if (errName) {
            if (
                (!remove &&
                    errorIndex === i - 1 &&
                    ts.isIfStatement(statement)) ||
                ts.isForStatement(statement) ||
                ts.isForInStatement(statement) ||
                ts.isForOfStatement(statement)
            ) {
                if (
                    visit(
                        statement,
                        (n) => ts.isReturnStatement(n) || ts.isThrowStatement(n)
                    )
                ) {
                    remove = true;
                }
            } else if (
                remove &&
                visit(statement, (n) => errName.some((e) => isIdentifier(n, e)))
            ) {
                if (isVariableStatement(statement, /_?valid\d+/))
                    errName.push(
                        statement.declarationList.declarations[0].name.text
                    );

                removableIndexes.push(i);
            }
        }
    });
    if (!remove) {
        return statements;
    }
    const newStatements: ts.Statement[] = [];

    statements.forEach((s, i) => {
        if (removableIndexes.includes(i)) {
            if (ts.isIfStatement(s) && ts.isBlock(s.thenStatement)) {
                newStatements.push(...s.thenStatement.statements);
            }
        } else {
            newStatements.push(s);
        }
    });

    return newStatements;
}

function visit(node: ts.Node, visitor: (node: ts.Node) => boolean): boolean {
    if (visitor(node)) {
        return true;
    }
    let res = false;

    try {
        node.forEachChild((c) => (res ? "" : (res = visit(c, visitor))));
        return res;
    } catch {
        return res;
    }
}
