import { SourceFile } from "ts-morph";

import ts from "typescript";
import { saveSource } from "../steps/utils";

const isObj =
    /^data(\d+)?(\.[a-zA-Z0-9$_]+)*?( !== null)? ?&& ?typeof data(\d+)? ?== ?"object" ?&& ?!Array\.isArray\(data(\d+)?\)$/;

const isArr = /^Array.isArray$/;
const dataRegexp = /(data(\d+)?(\.[a-zA-Z0-9$_]+)*)/;
const isUndefined = /^data(\d+)?(\.[a-zA-Z0-9$_]+)*? ?(===|!==) ?undefined$/;
const isNull = /^data(\d+)?(\.[a-zA-Z0-9$_]+)*? ?(===|!==) ?null$/;

export const replaceChecks = (sourceFile: SourceFile): void => {
    const fns: Record<string, string> = {};

    sourceFile
        .getDescendantsOfKind(ts.SyntaxKind.BinaryExpression)
        .reverse()
        .forEach((c) => {
            const text = c.getText();

            const data = dataRegexp.exec(text)?.shift();

            if (data) {
                if (isObj.test(text)) {
                    c.replaceWithText(`isObj(${data})`);
                    fns[
                        "isObj"
                    ] = `(v: unknown): v is any => !!v && typeof v === "object" && !Array.isArray(v);`;
                } else if (
                    c.getLeft().getKind() === ts.SyntaxKind.TypeOfExpression
                ) {
                    const right = c.getRight().getText();

                    if (right === '"string"') {
                        c.replaceWithText(`isStr(${data})`);
                        fns[
                            "isStr"
                        ] = `(v: unknown): v is string => typeof v === "string";`;
                    } else if (right === '"number"') {
                        c.replaceWithText(`isNum(${data})`);
                        fns[
                            "isNum"
                        ] = `(v: unknown): v is number => typeof v === "number";`;
                    } else if (right === '"boolean"') {
                        c.replaceWithText(`isNum(${data})`);
                        fns[
                            "isBool"
                        ] = `(v: unknown): v is number => typeof v === "boolean";`;
                    }
                } else if (isUndefined.test(text)) {
                    const token = c.getOperatorToken().getKind();
                    if (token === ts.SyntaxKind.ExclamationEqualsEqualsToken) {
                        c.replaceWithText(`!isUndefined(${data})`);
                        fns[
                            "isUndefined"
                        ] = `(v: unknown): v is undefined => v === undefined;`;
                    } else if (token === ts.SyntaxKind.EqualsEqualsToken) {
                        c.replaceWithText(`isUndefined(${data})`);
                        fns[
                            "isUndefined"
                        ] = `(v: unknown): v is undefined => v === undefined;`;
                    }
                } else if (isNull.test(text)) {
                    const token = c.getOperatorToken().getKind();
                    if (token === ts.SyntaxKind.ExclamationEqualsEqualsToken) {
                        c.replaceWithText(`!isNull(${data})`);
                        fns[
                            "isNull"
                        ] = `(v: unknown): v is null => v === null;`;
                    } else if (token === ts.SyntaxKind.EqualsEqualsToken) {
                        c.replaceWithText(`isUndefined(${data})`);
                        fns[
                            "isNull"
                        ] = `(v: unknown): v is undefined => v === null;`;
                    }
                }
            }
        });

    sourceFile
        .getDescendantsOfKind(ts.SyntaxKind.PropertyAccessExpression)
        .forEach((c) => {
            const text = c.getText();

            if (isArr.test(text)) {
                c.replaceWithText(`isArr`);
                fns["isArr"] = `Array.isArray`;
            }
        });

    sourceFile.replaceWithText(
        `${Object.keys(fns)
            .map((k) => `const ${k}= ${fns[k]}`)
            .join("\r\n")}\r\n${sourceFile.getText()}`
    );

    saveSource(sourceFile);
};
