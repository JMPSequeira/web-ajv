import ts from "typescript";
import { TransformTraversalControl } from "ts-morph";

const fac = ts.factory;
let renames: { [x: string]: boolean } = {};
export const removeUnusedParameters = function (
    t: TransformTraversalControl
): ts.Node {
    const node = t.currentNode;
    if (ts.isArrowFunction(node) || ts.isFunctionDeclaration(node)) {
        renames = {};
        node.parameters.forEach((p) => {
            if (ts.isObjectBindingPattern(p.name)) {
                p.name.elements.forEach((e) => {
                    if (ts.isIdentifier(e.name)) {
                        renames[e.name.text] = false;
                    }
                });
            } else if (!ts.isArrayLiteralExpression(p.name)) {
                renames[p.name.getText()] = false;
            }
        });
        const newNode = t.visitChildren();
        const filterParameters = (params: ts.ParameterDeclaration[]) => {
            const newParams: ts.ParameterDeclaration[] = [];
            params.forEach((p) => {
                if (ts.isObjectBindingPattern(p.name)) {
                    const elems = p.name.elements.filter((e) => {
                        if (ts.isIdentifier(e.name)) {
                            if (!renames[e.name.text]) {
                                return false;
                            }
                        }
                        return true;
                    });

                    newParams.push(
                        fac.updateParameterDeclaration(
                            p,
                            p.decorators,
                            p.modifiers,
                            p.dotDotDotToken,
                            fac.createObjectBindingPattern(elems),
                            p.questionToken,
                            p.type,
                            p.initializer
                        )
                    );
                } else if (
                    !ts.isArrayLiteralExpression(p.name) &&
                    renames[p.name.getText()]
                ) {
                    newParams.push(p);
                }
            });
            return newParams;
        };
        return ts.isArrowFunction(newNode)
            ? fac.updateArrowFunction(
                  newNode,
                  newNode.modifiers,
                  newNode.typeParameters,
                  filterParameters(Array.from(newNode.parameters)),
                  newNode.type,
                  newNode.equalsGreaterThanToken,
                  newNode.body
              )
            : ts.isFunctionDeclaration(newNode)
            ? fac.updateFunctionDeclaration(
                  newNode,
                  newNode.decorators,
                  newNode.modifiers,
                  undefined,
                  newNode.name,
                  newNode.typeParameters,
                  filterParameters(Array.from(newNode.parameters)),
                  newNode.type,
                  newNode.body
              )
            : newNode;
    } else if (ts.isParameter(node)) {
        return node;
    } else if (ts.isIdentifier(node)) {
        if (
            !(ts.isPropertyAssignment(node.parent) && node.parent.name === node)
        ) {
            renames[node.text] = true;
        }
        return node;
    }
    return t.visitChildren();
};
