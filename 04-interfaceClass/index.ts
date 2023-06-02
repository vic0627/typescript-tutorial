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
interface I12 extends I1, I2 {}

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
