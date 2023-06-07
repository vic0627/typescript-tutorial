"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static ansi(code) {
        return `\u001b[${code}m`;
    }
}
_a = default_1;
default_1.reset = _a.ansi("0");
default_1.format = {
    bold: _a.ansi("1"),
    underline: _a.ansi("3"),
    mirror: _a.ansi("7")
};
default_1.color = {
    black: _a.ansi("30"),
    red: _a.ansi("31"),
    green: _a.ansi("32"),
    yellow: _a.ansi("33"),
    blue: _a.ansi("34"),
    pink: _a.ansi("35"),
    purple: _a.ansi("36"),
    white: _a.ansi("37"),
};
exports.default = default_1;
