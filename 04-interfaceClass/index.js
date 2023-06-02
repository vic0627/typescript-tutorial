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
        throw new Error(`
            Parameter \`p1\` and \`p2\` should only accept both \`number\` type or \`string\` type.
        `);
    },
};
console.log(addition.add(6, 1));
console.log(addition.add("94", "321"));
