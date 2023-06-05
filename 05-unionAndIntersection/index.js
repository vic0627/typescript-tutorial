"use strict";
// Union & Intersection
let a = "asd";
a = 6546;
// let b: TI = "asd"; // Type 'string' is not assignable to type 'never'.
// Type Guard
// Type Guard is a way to narrow down the type of a variable within a conditional block. It allows you to make specific type assertions or perform type checks in order to gain more precise type imformation. Type Guards are useful when working with union types or when you need to check the runtime type of a value.
// 1. typeof: typeof variable === "type"
console.log(typeof a); // <- number
// 2. instanceof: variable instanceof instance
const o = new Date();
console.log(o instanceof Date); // <- true
// 3. user-defined:
function isString(value) {
    return typeof value === "string";
}
console.log(isString("asd")); // <- true
console.log(isString(a)); // <- false
