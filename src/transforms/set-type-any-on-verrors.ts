import ts from "typescript";
import { TransformTraversalControl } from "ts-morph";
import { getTypeNode, isVariableStatement } from "../steps/utils";

const fac = ts.factory;

export const setTypeAnyOnVErrors = function (
    t: TransformTraversalControl
): ts.Node {
    const node = t.currentNode;

    if (isVariableStatement(node, "vErrors")) {
        const declaration = node.declarationList.declarations[0];
        return fac.createVariableStatement(
            node.modifiers,
            fac.updateVariableDeclarationList(
                node.declarationList as unknown as ts.VariableDeclarationList,
                [
                    fac.updateVariableDeclaration(
                        declaration,
                        declaration.name,
                        declaration.exclamationToken,
                        getTypeNode("any"),
                        declaration.initializer
                    ),
                ]
            )
        );
    }
    return t.visitChildren();
};
