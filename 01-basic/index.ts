let myName = "Maxwell";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

// myName = 123;
// age = "abc";
nothing = 134;

let message: null = null;
let nothings: undefined = undefined;

var str: string;

// let myStr = str;

let nullOrString: string | null = null;

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
let obj2 = { ...obj1, good: "bye" };

let obj3 = { hello: "Another World" };
let obj4 = Object.assign(obj3, {
  goodbye: "Cruel World",
});

let obj5: object = { hello: "world" };

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

const add = function (a: number, b: number): string {
  return (a + b).toString();
};

let beStr: string = add(1, 2);

let JSONString = `{"name": "vic", "age": "27"}`;

let pasreJSON = JSON.parse(JSONString);

let parseJSON1 = JSON.parse(JSONString) as { name: string; age: number };
let parseJSON2 = <{ name: string; age: number }>JSON.parse(JSONString);
let parseJSON3: { name: string; age: number } = JSON.parse(JSONString);

let reduce = function (a: number, b: number) {
  return a - b;
};

reduce = function (a: number, b: number) {
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
let testVoid2 = function (): undefined {
  return undefined;
};
// let testVoid3 = function (): undefined {

// };
let testVoid4 = function (): void {
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
  function add(a: number, b: number) {
    return a + b;
  },
  function sub(a: number, b: number) {
    return a - b;
  },
  function dou(a: number, b: number) {
    return a + b;
  },
  function div(a: number, b: number) {
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

let nullOrNumbersArr2: (number | null)[] = [1, 2, 4];
nullOrNumbersArr2.splice(1, 0, null);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.map((num) => num + 2);

// let dogA = ["波奇", "拉不拉多", "金", new Date(2020, 3, 15)];
// let dogB = ["Angel", "吉娃娃", "黑", new Date(2020, 7, 31)];
// let dogC = ["妞妞", "柴犬", "白", new Date(2019, 5, 5)];

// let dogA: [string, string, string, Date] = [
//   "波奇",
//   "拉不拉多",
//   "金",
//   new Date(2020, 3, 15),
// ];
// let dogB: [string, string, string, Date] = [
//   "Angel",
//   "吉娃娃",
//   "黑",
//   new Date(2020, 7, 31),
// ];
// let dogC: [string, string, string, Date] = [
//   "妞妞",
//   "柴犬",
//   "白",
//   new Date(2019, 5, 5),
// ];

type dog = [string, string, string, Date];

let dogA: dog = ["波奇", "拉不拉多", "金", new Date(2020, 3, 15)];
let dogB = <dog>["Angel", "吉娃娃", "黑", new Date(2020, 0, 31)];
let dogC = ["妞妞", "柴犬", "白", new Date(2019, 5, 5)] as dog;

let cat = {
  name: "",
  type: "",
  color: "",
  birth: new Date(),
};

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let m = WeekDay.Monday;

let w: WeekDay = WeekDay.Wednesday;