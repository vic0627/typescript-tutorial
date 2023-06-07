import * as fs from "fs";
import * as path from "path";

// 取得當前絕對路徑
const rootPath = path.resolve(__dirname);

const moduleFunctions: {
    [props: string]: Function[];
} = {};

function importAllModules(directory: string, fileName?: string) {
    // 路徑下所有檔案與資料夾名稱陣列
    const files = fs.readdirSync(directory);

    // 遍歷名稱陣列
    for (const file of files) {
        // 檔案絕對路徑
        const filePath = path.join(directory, file);

        // 取得檔案或路徑的詳細訊息
        const stats = fs.statSync(filePath);

        if (stats.isDirectory() && file !== "utils") {
            if (file.includes("Patterns")) importAllModules(filePath, file);
            else if (fileName) importAllModules(filePath, fileName);
            else importAllModules(filePath);
        } else if (filePath.endsWith(".js") && file !== "index.js") {
            const module = require(filePath);
            if (fileName && !(moduleFunctions[fileName] instanceof Array)) {
                moduleFunctions[fileName] = [];
            }
            if (fileName && module.default) {
                moduleFunctions[fileName].push(module.default);
            }
        }
    }
}

importAllModules(rootPath);

import print from "./utils/print";
const { Scope, printBlock } = print;
for (const pattern in moduleFunctions) {
    const pb = printBlock(Scope.h1, pattern, function () {
        moduleFunctions[pattern].forEach((func) => {
            func();
        });
    });
    pb();
}
