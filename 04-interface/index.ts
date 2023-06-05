/* Interface 表現形式 */
enum Gender {
    Male,
    Female,
    Other,
}

// 格式物件
interface UserInfo {
    // 原始型別
    id: number;
    name: string;

    // 廣義物件型別
    birth: Date;
    interests: string[];

    // Enum or Tuple
    gender: Gender;

    // 物件明文型別
    address: {
        country: string;
        city: string;
        postalCode: string;
    };

    // 函式型別
    logInfo(message: string): void;
}

// 純函式格式
interface UpdateRecord {
    (id: number, newRecord: UserInfo): void;
}

/* Interface 基本使用 */
// 定義一個介面
interface Person {
    name: string;
    age: number;
    hasPet: boolean;
    gender?: Gender;
}

// 使用介面
const Mike: Person = {
    name: "Mike",
    age: 23,
    hasPet: false,
    gender: Gender.Male,
};

/* 檢測物件被推論結果作為函式參數的狀況 */
function printPerson(person: Person) {
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

/* 介面的擴展 Interface Extension */
interface AccountSystem {
    account: string;
    password: string;
    subscribed: boolean;
}

interface AccountPersonalInfo {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

// UserAccount 是 AccountSystem, AccountPersonalInfo 兩者的結合。
interface UserAccount extends AccountSystem, AccountPersonalInfo {}

const accountMike: UserAccount = {
    account: "mike878787",
    password: "@mije7878778",
    subscribed: true,
    nickname: "doggy",
    birth: new Date(1995, 3, 3),
    gender: Gender.Male,
};

/* 介面的交集 */
// 定義三種不同介面
interface I1 {
    a: string;
    b: number;
}
interface I2 {
    b: number;
    c: boolean;
}
interface I3 {
    a: string;
    c: string;
}

// T1 T2 同樣有 b 且對應型別相同 => success
interface I12 extends I1, I2 {
    d: number;
    e: Function;
}

// T2 T3 同樣有 c 但對應型別不同 => fail
// interface I23 extends I2, I3 {}

/* 介面的函式超載 Function Overload */
interface AddOperation {
    add(p1: number, p2: number): number;
    add(p1: string, p2: string): number;
}

const addition: AddOperation = {
    add(p1: number | string, p2: number | string) {
        if (typeof p1 === "number" && typeof p2 === "number") {
            return p1 + p2;
        } else if (typeof p1 === "string" && typeof p2 === "string") {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error(
            `Parameter "p1" and "p2" should only accept both "number" type or "string" type.`
        );
    },
};

console.log(addition.add(6, 1));
console.log(addition.add("94", "321"));

// Indexable Types

// Syntax:
// [keyName: TKey]: TValue

// 1. TKey must to be either in number, string or symbol types, other types, including union type, are not acceptable.
// 2. TValue can be any type.

// Declare an object called 'Dictionarey', its keys and values are both in string type.
type Dictionary = {
    [propName: string]: string;
};
const normalDictionary: Dictionary = {
    hello: "world",
    hey: "bitch",
};
const emptyDictionary: Dictionary = {};
const wrongDictionary: Dictionary = {
    // hello: 123,
    // boo: true,
    // func: () => {},
    // nested: { hi: "bitch" },
};
// 定義類似陣列的型別，儲存值皆為字串。
interface StringTypeList {
    [index: number]: string;
}
const stringTA: StringTypeList = {
    123: "asd",
    [234]: "asdf",
};
const emptyTA: StringTypeList = {};
// const stringTAL: StringTypeList = [1, 2, 3];
const emptyTA2: StringTypeList = [];
console.log(stringTA[123]);
console.log(stringTA[234]);
const wrongSTA: StringTypeList = {
    // message: "asfg",
    // thisGirl: "is bitch",
};
// stringTA["asd"]
// stringTA.asd

type Sym = {
    [prop: symbol]: string;
};
const sym: Sym = {
    [Symbol("a")]: "asd",
    [Symbol("b")]: "fghfghd",
    [Symbol("c")]: "asadfdsd",
};
console.log(Object.getOwnPropertySymbols(sym));
console.log(Reflect.ownKeys(sym));

const iteratorSymbol = Symbol.iterator;
const objArr = [1, 2, 3, 4, 5, 6];
console.log(objArr[Symbol.iterator]());

// type MultiKeys = {
//     [key: number]: number;
//     [key: string]: string;
// };

type User = {
    name: string;
    [prop: string]: string;
};

type User2 = {
    name: string;
    // birth: Date,
    [prop: string]: string;
};

// Optional Properties
interface AccountUser {
    email: string;
    password: string;
    name?: string;
    age?: number;
}

// Readonly Property
interface AccountUser2 extends AccountUser {
    readonly _id: number;
    readonly _token: string;
}
const userMike: AccountUser2 = {
    email: "mike@a.com",
    password: "asf84df64",
    _id: 9875213,
    _token: "saf68d4sdsf65df6fs64f",
};
// userMike._id = 5465465

// Hybrid Type Interface
// 1. Object, or so-called "JSON". // property: type;
// 2. Single function, there're no properties except a function, and the function  name is optional. // functionName(parameter: type): return;
// 3. Hybrid, the mixing of object and single function.
interface Counter {
    // single function
    (start: number): void;

    // object
    increment(): number;
    reset(): void;
    value: number;
}

function createCounter(): Counter {
    let value: number;
    let initializedNumber: number;

    // function
    const counter = function (start: number) {
        initializedNumber = start;
        value = start;
    } as Counter;

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
const counter: Counter = createCounter();

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
