import { TransformTraversalControl } from "ts-morph";
import ts from "typescript";
import {
    isIdentifier,
    isSourceFile,
    isVariableStatement,
} from "../steps/utils";
const fac = ts.factory;
let map: { [x: string]: string } = {};

export const declareWrappersAfterFunctions = (
    t: TransformTraversalControl
): ts.Node => {
    const node = t.currentNode;

    if (isSourceFile(node)) {
        map = {};
        const wrapperStatements: ts.Statement[] = [];
        const statements: ts.Statement[] = [];
        for (let i = 0; i < node.statements.length; i++) {
            const s = node.statements[i];
            if (isVariableStatement(s, /wrapper\d+/)) {
                const declaration = s.declarationList.declarations[0];
                if (
                    declaration.initializer &&
                    ts.isObjectLiteralExpression(declaration.initializer)
                ) {
                    wrapperStatements.push(s);
                    continue;
                }
            }
            if (s) {
                statements.push(s);
            }
        }

        return fac.updateSourceFile(node, [
            ...statements,
            ...wrapperStatements,
        ]);
    } else if (
        ts.isPropertyAccessExpression(node) &&
        isIdentifier(node.name, "validate")
    ) {
        const oldName = node.expression.getText();
        const newName = map[oldName];
        if (newName) {
            return fac.createIdentifier(newName);
        }
    }
    return t.visitChildren();
};
