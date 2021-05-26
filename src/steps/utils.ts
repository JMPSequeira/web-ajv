import { SourceFile } from "ts-morph";
import mockfs from "mock-fs";
import ts from "typescript";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const errorProperties = [
    "instancePath",
    "schemaPath",
    "keyword",
    "params",
    "message",
    "schema",
    "parentSchema",
    "data",
];

export function traverseObject(
    o: any,
    // eslint-disable-next-line no-unused-vars
    action: (key: string, o: any) => boolean | void
): void {
    const iterator = internalTraverse(o);
    let current = iterator.next();

    while (!current.done) {
        for (const key in current.value) {
            if (action(key, current.value)) {
                return;
            }
        }

        current = iterator.next();
    }
}

function internalTraverse(o: any): Iterator<any> {
    const path: ([any[], number?] | [{ [x: string]: any }, number?])[] = [[o]];

    function moveNext(): { [x: string]: any } | null {
        const pathItem = path[path.length - 1];

        if (pathItem) {
            const current = pathItem[0];
            const index = (pathItem[1] || 0) as number;

            if (Array.isArray(current)) {
                for (let i = index; i < current.length; i++) {
                    const candidate = current[i];
                    if (typeof candidate === "object" && candidate !== null) {
                        pathItem[1] = ++i;
                        path.push([candidate]);
                        return candidate;
                    }
                }
                path.pop();
                return moveNext();
            }

            const keys = Object.keys(current);

            for (let i = index; i < keys.length; i++) {
                const key = keys[i];

                const candidate = key ? current[key] : undefined;
                if (Array.isArray(candidate)) {
                    pathItem[1] = ++i;
                    path.push([candidate]);
                    return moveNext();
                }
                if (typeof candidate === "object" && candidate !== null) {
                    pathItem[1] = ++i;
                    path.push([candidate]);
                    return candidate;
                }
            }
            path.pop();
            return moveNext();
        }

        return null;
    }

    let hasInit = false;

    return {
        next: function () {
            const next = hasInit ? moveNext() : o;

            hasInit = true;

            return {
                value: next,
                done: next === null,
            };
        },
    };
}

export function getNameFromSource(src: string) {
    const name = /([^/\\.]+)(\.config)?(\.(ts|js|json|yaml|txt))?$/
        .exec(src)?.[1]
        ?.replace(/-(.)/, function (...args: any[]) {
            return args[1]?.toUpperCase();
        });

    if (name && /^[^a-zA-Z$_]/.test(name)) {
        return `_${name}`;
    }
    return name;
}

export function saveSource(sourceFile: SourceFile): void {
    try {
        mockfs();
        sourceFile.saveSync();
    } finally {
        mockfs.restore();
    }
}

export function getTypeNode(typeStr: string): ts.TypeNode | undefined {
    const typeStatement = ts
        .createSourceFile("dummy.ts", `let a: ${typeStr}`, ts.ScriptTarget.ES5)
        .statements.find((_, i) => i === 0);
    if (typeStatement && ts.isVariableStatement(typeStatement)) {
        const typeDeclaration = typeStatement.declarationList?.declarations[0];
        if (typeDeclaration) {
            return typeDeclaration.type as ts.TypeNode;
        }
    }
    return undefined;
}

export function isIdentifier<T>(
    node: ts.Node,
    text: T extends string ? T : never
): node is ts.Identifier & { text: T } {
    return ts.isIdentifier(node) && node.text === text;
}

export function isMatchableIdentifier(
    node: ts.Node,
    regexp: RegExp
): node is ts.Identifier {
    return ts.isIdentifier(node) && regexp.test(node.text);
}

export function isSingleVariableDeclaration(
    node: ts.Node
): node is ts.VariableDeclarationList & {
    declarations: ts.NodeArray<ts.VariableDeclaration> & {
        length: 1;
        0: ts.VariableDeclaration;
    };
} {
    return !!(
        ts.isVariableDeclarationList(node) &&
        node.declarations.length === 1 &&
        node.declarations[0]
    );
}

export function createSafeVErrors() {
    return ts.factory.createParenthesizedExpression(
        ts.factory.createBinaryExpression(
            ts.factory.createIdentifier("vErrors"),
            ts.SyntaxKind.BarBarEqualsToken,
            ts.factory.createArrayLiteralExpression()
        )
    );
}
