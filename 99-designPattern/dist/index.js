"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// 取得當前絕對路徑
const rootPath = path.resolve(__dirname);
const moduleFunctions = {};
function importAllModules(directory, fileName) {
    // 路徑下所有檔案與資料夾名稱陣列
    const files = fs.readdirSync(directory);
    // 遍歷名稱陣列
    for (const file of files) {
        // 檔案絕對路徑
        const filePath = path.join(directory, file);
        // 取得檔案或路徑的詳細訊息
        const stats = fs.statSync(filePath);
        // 是資料夾，且不為特定路徑
        if (stats.isDirectory() && file !== "utils") {
            // 若資料夾為設計模式種類，將名稱帶入函式遞迴
            if (file.includes("Patterns"))
                importAllModules(filePath, file);
            // 若 fileName 參數存在，繼續帶入遞迴
            else if (fileName)
                importAllModules(filePath, fileName);
            // 錯誤路徑
            else
                throw new Error("路徑設定錯誤! 請檢查資料夾結構!");
            // 是 JS 檔
        }
        else if (filePath.endsWith(".js")) {
            if (!fileName)
                continue;
            const module = require(filePath);
            if (!(moduleFunctions[fileName] instanceof Array))
                moduleFunctions[fileName] = [];
            if (module.default)
                moduleFunctions[fileName].push(module.default);
        }
    }
}
importAllModules(rootPath);
const print_1 = __importDefault(require("./utils/print"));
const { Scope, printBlock } = print_1.default;
Object.keys(moduleFunctions).forEach((pattern) => {
    printBlock(Scope.h1, pattern.split("P").join(" P"), () => {
        moduleFunctions[pattern].forEach((func) => {
            func();
        });
    })();
});
