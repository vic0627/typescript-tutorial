"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ANSI_1 = __importDefault(require("./ANSI"));
const { color, format, reset } = ANSI_1.default;
var Scope;
(function (Scope) {
    Scope[Scope["h1"] = 0] = "h1";
    Scope[Scope["h2"] = 1] = "h2";
    Scope[Scope["h3"] = 2] = "h3";
})(Scope || (Scope = {}));
function printBlock(scope, title, clientCode) {
    let outPutHeader, outputFooter;
    if (scope === Scope.h1) {
        const L = "##########  ";
        const RS = " Start  ##########";
        const RE = " End  ##########";
        outPutHeader = format.bold + color.green + L + title + RS + reset;
        outputFooter = format.bold + color.green + L + title + RE + reset;
    }
    else if (scope === Scope.h2) {
        const L = "==========  ";
        const RS = " Start  ==========";
        const RE = " End  ==========";
        outPutHeader = format.bold + color.blue + L + title + RS + reset;
        outputFooter = format.bold + color.blue + L + title + RE + reset;
    }
    else if (scope === Scope.h3) {
        const L = "----------  ";
        const RS = " Start  ----------";
        const RE = " End  ----------";
        outPutHeader = color.purple + L + title + RS + reset;
        outputFooter = color.purple + L + title + RE + reset;
    }
    return function () {
        console.log(outPutHeader);
        clientCode();
        console.log(outputFooter);
    };
}
exports.default = {
    Scope,
    printBlock,
};
