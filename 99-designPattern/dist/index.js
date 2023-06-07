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
        if (stats.isDirectory() && file !== "utils") {
            if (file.includes("Patterns"))
                importAllModules(filePath, file);
            else if (fileName)
                importAllModules(filePath, fileName);
            else
                importAllModules(filePath);
        }
        else if (filePath.endsWith(".js") && file !== "index.js") {
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
const print_1 = __importDefault(require("./utils/print"));
const { Scope, printBlock } = print_1.default;
for (const pattern in moduleFunctions) {
    const pb = printBlock(Scope.h1, pattern, function () {
        moduleFunctions[pattern].forEach((func) => {
            func();
        });
    });
    pb();
}
