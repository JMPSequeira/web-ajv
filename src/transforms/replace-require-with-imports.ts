import {
    SourceFile,
    PropertyAccessExpression,
    ElementAccessExpression,
    VariableDeclaration,
} from "ts-morph";

import ts from "typescript";

let map: {
    [x: string]: {
        properties?: string[];
        single?: string;
    };
} = {};

let importCounter = 0;

export const replaceRequireWithImports = (sourceFile: SourceFile): string[] => {
    map = {};
    importCounter = 0;

    sourceFile
        .getDescendantsOfKind(ts.SyntaxKind.CallExpression)
        .forEach((c) => {
            const regexp = /require\(('|")(.+)('|")\)/;

            const result = regexp.exec(c.getText());

            if (result) {
                const source = result[2];

                if (source) {
                    let parent = c.getParent();
                    const kinds = [
                        ts.SyntaxKind.ElementAccessExpression,
                        ts.SyntaxKind.PropertyAccessExpression,
                    ];
                    const accesses: (
                        | PropertyAccessExpression
                        | ElementAccessExpression
                    )[] = [];
                    while (parent && kinds.includes(parent.getKind())) {
                        accesses.push(
                            parent as
                                | PropertyAccessExpression
                                | ElementAccessExpression
                        );
                        parent = parent.getParent();
                    }

                    if (
                        ts.isVariableDeclaration(
                            parent?.compilerNode as ts.Node
                        )
                    ) {
                        const declaration = parent as VariableDeclaration;

                        resolveImport(source, declaration, accesses);
                    }
                }
            }
        });
    return Object.keys(map).map((source) => {
        const spec = map[source];

        if (spec?.single) {
            return `import ${spec?.single} from "${source}"`;
        }

        return `import { ${spec?.properties?.join(", ")} } from "${source}"`;
    });
};
function resolveImport(
    source: string,
    declaration: VariableDeclaration,
    accesses: (PropertyAccessExpression | ElementAccessExpression)[]
): string | void {
    const name = declaration.getNameNode();
    const asVar = name.asKind(ts.SyntaxKind.Identifier);
    if (asVar) {
        const name = asVar.getText();

        if (accesses[0]?.getText().endsWith(".default")) {
            accesses.shift();
        }

        if (!accesses.length) {
            declaration.remove();
            map[source] = {
                single: name,
            };
            return;
        }

        let importName = "";
        const property = accesses[0]
            ?.asKind(ts.SyntaxKind.PropertyAccessExpression)
            ?.getName();
        if (property) {
            importName = property;
            accesses.shift();
        }
        if (!map[source]) {
            if (property) {
                map[source] = {
                    properties: [property],
                };
            } else {
                map[source] = {
                    single: "__import" + importCounter++,
                };
            }
        } else {
            if (property) {
                if (!map[source]?.properties?.includes(property)) {
                    map[source]?.properties?.push(property);
                }
            } else {
                const single = map[source]?.single;
                if (single) {
                    importName = single;
                }
            }
        }

        const propertyChain = accesses.reduce(
            (p, a) =>
                p.concat(
                    a.asKind(ts.SyntaxKind.ElementAccessExpression)
                        ? `[${a
                              .asKind(ts.SyntaxKind.ElementAccessExpression)
                              ?.getArgumentExpression()
                              ?.getText()}]`
                        : `.${a
                              .asKind(ts.SyntaxKind.PropertyAccessExpression)
                              ?.getNameNode()
                              ?.getText()}`
                ),
            ""
        );

        declaration
            .getInitializer()
            ?.replaceWithText(`anyfy(${importName})${propertyChain}`);
    }
}
