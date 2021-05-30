import { SourceFile, Identifier, Block, IfStatement } from "ts-morph";

import ts from "typescript";
import { isIdentifier, saveSource } from "../steps/utils";

export const removeUnnecessaryValidChecks = (sourceFile: SourceFile): void => {
    sourceFile
        .getDescendantsOfKind(ts.SyntaxKind.ArrowFunction)
        .reverse()
        .forEach((c) => {
            const valid0 = c.getFirstDescendant((e) =>
                isIdentifier(e.compilerNode, "valid0")
            ) as Identifier;
            if (valid0) {
                const otherReferences = valid0.findReferencesAsNodes();

                let remove = false;
                let skip = false;
                const removableIfs: IfStatement[] = [];
                otherReferences.forEach((o) => {
                    const variableStmt = o.getFirstAncestorByKind(
                        ts.SyntaxKind.VariableStatement
                    );

                    if (variableStmt) {
                        const declaration = variableStmt.getDeclarations()[0];
                        if (declaration && declaration.getName() === "valid0") {
                            if (
                                declaration.getInitializerIfKind(
                                    ts.SyntaxKind.TrueKeyword
                                )
                            ) {
                                variableStmt.replaceWithText("");
                                if (skip) {
                                    skip = false;
                                } else {
                                    remove = true;
                                }
                            } else {
                                remove = false;
                                skip = true;
                            }
                            return;
                        }
                    }

                    if (remove) {
                        const ifStmt = o.getParentIfKind(
                            ts.SyntaxKind.IfStatement
                        );
                        if (
                            ifStmt &&
                            ifStmt.getThenStatement() &&
                            !ifStmt.getElseStatement()
                        ) {
                            removableIfs.push(ifStmt);
                        }
                    }
                });
                removableIfs.reverse().forEach((ifStmt) => {
                    ifStmt?.replaceWithText(
                        (ifStmt.getThenStatement() as Block)
                            .getStatements()
                            .map((s) => s.getText())
                            .join("\r\n")
                    );
                });
            }
        });
    sourceFile.replaceWithText(sourceFile.getText());
    saveSource(sourceFile);
};
