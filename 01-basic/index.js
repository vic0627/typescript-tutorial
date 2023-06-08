"use strict";
let myName = "Maxwell";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;
// myName = 123;
// age = "abc";
nothing = 134;
let message = null;
let nothings = undefined;
var str;
// let myStr = str;
let nullOrString = null;
let info = {
    name: "mike",
    age: 20,
    hasPet: false,
};
// info.age = "123";
// info = {
//   name: "asd",
//   age: 12,
// };
// info.love = "aaa";
let someone = {
    knows: undefined,
    identify: null,
};
let nest = {
    prop: "hello",
    child: {
        prop1: 123,
        prop2: false,
    },
};
let obj1 = { hello: "world" };
let obj2 = Object.assign(Object.assign({}, obj1), { good: "bye" });
let obj3 = { hello: "Another World" };
let obj4 = Object.assign(obj3, {
    goodbye: "Cruel World",
});
let obj5 = { hello: "world" };
// obj5.hello = "bye";
obj5 = { bye: "bye" };
// obj5.prop = 123;
// obj5 = 123;
obj5 = [1, "x", true, { hello: "bye" }];
obj5 = function () {
    console.log("hi");
};
obj5 = () => ({});
obj5 = new Object();
obj5 = new String("abc");
obj5 = new Number(42);
obj5 = Object;
obj5 = Array;
let func = function () {
    console.log("hi");
};
// const add = function (a: number, b: number): string {
//   return (a + b).toString();
// };
// let beStr: string = add(1, 2);
let JSONString = `{"name": "vic", "age": "27"}`;
let pasreJSON = JSON.parse(JSONString);
let parseJSON1 = JSON.parse(JSONString);
let parseJSON2 = JSON.parse(JSONString);
let parseJSON3 = JSON.parse(JSONString);
let reduce = function (a, b) {
    return a - b;
};
reduce = function (a, b) {
    return b - a;
};
// reduce = function (a: string, b: string) {
//   return a - b;
// };
// reduce = function (a: number, b: number) {
//   a - b;
// };
let testVoid = function () {
    return undefined;
};
let testVoid2 = function () {
    return undefined;
};
// let testVoid3 = function (): undefined {
// };
let testVoid4 = function () {
    return undefined;
};
// 全部都是數字
let numbers = [1, 2, 3, 4, 5];
// legal
numbers[0] = 23;
numbers.push(23);
numbers.concat([23, 24]);
numbers = [1, 3, 74, 23];
// illegal
// numbers[0] = "a";
// numbers.push("a");
// numbers.concat(["abc", "cba"]);
// numbers = ["cakdf", "asfvcl"];
// 全部都是字串
let strings = ["hi", "how are you", "goodbye"];
let arr = ["asd", 1321, "acs", { a: 1 }, true];
let objArr = [{ text: "dfg" }, { text: "bht" }, { text: "dfrg" }];
let objArr2 = [{ text: "dfg" }, { text: "bht", head: true }, { text: "dfrg" }];
let objArr3 = [{ text: "dfg" }, { text: 456 }, { text: "dfrg" }];
let funcArr = [
    function add(a, b) {
        return a + b;
    },
    function sub(a, b) {
        return a - b;
    },
    function dou(a, b) {
        return a + b;
    },
    function div(a, b) {
        return a / b;
    },
];
let nestArr = [
    [1, 2, 3],
    ["asc", "ascas", "scca", "acs"],
    [true, true, true, true],
];
let nesty = [
    [12, 34],
    ["dsc", "dcc"],
    [true, false, 123, null],
    ["sada", undefined],
];
// nesty.push([32, "dsc"])
let empty = [];
let nullOrNumbersArr = [1, 2, 4];
// nullOrNumbersArr.splice(2, 0, null);
let nullOrNumbersArr2 = [1, 2, 4];
nullOrNumbersArr2.splice(1, 0, null);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.map((num) => num + 2);
let dogA = ["波奇", "拉不拉多", "金", new Date(2020, 3, 15)];
let dogB = ["Angel", "吉娃娃", "黑", new Date(2020, 0, 31)];
let dogC = ["妞妞", "柴犬", "白", new Date(2019, 5, 5)];
let cat = {
    name: "",
    type: "",
    color: "",
    birth: new Date(),
};
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
let m = WeekDay.Monday;
let w = WeekDay.Wednesday;
// console.log(w);
let keyW = WeekDay[w];
// console.log(keyW);
var baby;
(function (baby) {
    baby[baby["Yvonne"] = 606] = "Yvonne";
    baby[baby["Victor"] = 627] = "Victor";
})(baby || (baby = {}));
let i = 0;
for (const key in WeekDay) {
    i++;
    const value = WeekDay[key];
    // console.log({ i, key, value });
}
let pow = function (a, b) {
    return a + b;
};
function printPerson(info) {
    console.log(info.name);
    console.log(info.age);
    console.log(info.pet);
}
printPerson({
    name: "mike",
    age: 24,
    pet: true,
    // love: "abby",
});
let mike = {
    name: "mike",
    age: 24,
    pet: true,
    love: "abby",
};
printPerson(mike);
