"use strict";
/* Interface 表現形式 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// 使用介面
const Mike = {
    name: "Mike",
    age: 23,
    hasPet: false,
    gender: Gender.Male,
};
/* 檢測物件被推論結果作為函式參數的狀況 */
function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.hasPet);
}
// case 1 直接帶入物件
printPerson({
    name: "Mike",
    age: 23,
    hasPet: false,
    //   job: "backend",
    //   ex: "nothing",
});
// case 2 物件先存入變數
const MikeB = {
    name: "Mike",
    age: 23,
    hasPet: false,
    job: "backend",
    ex: "nothing",
};
printPerson(MikeB);
const accountMike = {
    account: "mike878787",
    password: "@mije7878778",
    subscribed: true,
    nickname: "doggy",
    birth: new Date(1995, 3, 3),
    gender: Gender.Male,
};
const addition = {
    add(p1, p2) {
        if (typeof p1 === "number" && typeof p2 === "number") {
            return p1 + p2;
        }
        else if (typeof p1 === "string" && typeof p2 === "string") {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error(`Parameter "p1" and "p2" should only accept both "number" type or "string" type.`);
    },
};
console.log(addition.add(6, 1));
console.log(addition.add("94", "321"));
const normalDictionary = {
    hello: "world",
    hey: "bitch",
};
const emptyDictionary = {};
const wrongDictionary = {
// hello: 123,
// boo: true,
// func: () => {},
// nested: { hi: "bitch" },
};
const stringTA = {
    123: "asd",
    [234]: "asdf",
};
const emptyTA = {};
// const stringTAL: StringTypeList = [1, 2, 3];
const emptyTA2 = [];
console.log(stringTA[123]);
console.log(stringTA[234]);
const wrongSTA = {
// message: "asfg",
// thisGirl: "is bitch",
};
const sym = {
    [Symbol("a")]: "asd",
    [Symbol("b")]: "fghfghd",
    [Symbol("c")]: "asadfdsd",
};
console.log(Object.getOwnPropertySymbols(sym));
console.log(Reflect.ownKeys(sym));
const iteratorSymbol = Symbol.iterator;
const objArr = [1, 2, 3, 4, 5, 6];
console.log(objArr[Symbol.iterator]());
const userMike = {
    email: "mike@a.com",
    password: "asf84df64",
    _id: 9875213,
    _token: "saf68d4sdsf65df6fs64f",
};
function createCounter() {
    let value;
    let initializedNumber;
    // function
    const counter = function (start) {
        initializedNumber = start;
        value = start;
    };
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedNumber;
    };
    Object.defineProperty(counter, "value", {
        get() {
            return value;
        },
    });
    return counter;
}
// create a counter object
const counter = createCounter();
// We can supply a number argument into the counter
counter(5); // <- initial value will be number 5
// call the "value" property of interface "Counter"
console.log(counter.value); // <- output should be 5
// call "increment" method three times
counter.increment();
counter.increment();
counter.increment();
// call the "value" property again
console.log(counter.value); // <- now the output should be 8
// call "reset" method
counter.reset();
console.log(counter.value); // <- output should be the initial state, 8
// Syntatic Comparison
// type T = U;
// interface I {
// P: U;
// ...
// }
// Application Comparison
// 1. interface Extension/Inheritance
// type T = number;
// interface I {
//     a: string;
// }
// interface F {
//     (p1: number): number;
// }
// type U = T & I;
// interface J extends F, I {}
// 2. Declaration Merging
// interface I1 {
//     a: string;
//     b: number;
//     c: string;
// }
// interface T1 {
//     d: number;
//     e: string;
// }
// Interfaces cannot directly emulate primitive types, Enum and Tuple
