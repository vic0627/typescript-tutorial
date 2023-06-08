"use strict";
const forever = () => {
    while (true) {
        //...
    }
};
const ran = Math.random();
const ifForever = (n) => {
    while (n >= 0.5) {
        //...
    }
};
ifForever(ran);
ifForever(0.1);
ifForever(0.6);
function op(n) {
    return n + n;
}
let anyT;
let unT;
anyT = 123;
anyT = "123";
anyT = true;
anyT = null;
anyT = undefined;
anyT = {};
anyT = [];
anyT = () => { };
anyT = new Object();
unT = 123;
unT = "123";
unT = true;
unT = null;
unT = undefined;
unT = {};
unT = [];
unT = () => { };
unT = new Object();
let isN;
let isS;
let isB;
let isNull;
let isU;
isN = anyT;
isS = anyT;
isB = anyT;
isNull = anyT;
isU = anyT;
unT = anyT;
// isN = unT;
// isS = unT;
// isB = unT;
// isNull = unT;
// isU = unT;
anyT = unT;
const jsonStr = `{
  "name": "Hank"
  "age": "25"
}`;
const parseHank = JSON.parse(jsonStr);
parseHank.name;
const safeParse = (str) => {
    return JSON.parse(str);
};
const safeParseHank = safeParse(jsonStr);
