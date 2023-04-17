"use strict";
// type Gender = "male" | "female"; // 型別化名 Type Alias
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
let accountVic = {
    account: "vic12345",
    password: "@asdfvic0000",
    gender: Gender.Male,
    subscribed: false,
};
// console.log(accountVic);
// {
//    account: 'vic12345',
//    password: '@asdfvic0000',
//    gender: 0,
//    subscribed: false
// }
// function 選用參數
const add = (num1, num2) => {
    if (num2) {
        console.log(num1 + num2);
    }
    else {
        console.log(num1 + 3);
    }
};
const addA = add(1);
const addB = add(2, undefined);
const aa = ["sax", "dsc", "1995-05-05", new Date()];
