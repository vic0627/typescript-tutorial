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
console.log(accountVic);
