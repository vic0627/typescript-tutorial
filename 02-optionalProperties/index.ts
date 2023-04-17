// type Gender = "male" | "female"; // 型別化名 Type Alias

enum Gender { // 列舉型別 Enumerated Type
  Male,
  Female,
  Other,
}

// type AccountInfo = {
//   account: string;
//   password: string;
//   nickname?: string; // 選用屬性註記 Optional Property Annotation <Prop>?
//   birth?: Date;
//   gender?: Gender;
//   subscribed: boolean;
// };

type AccountSystem = {
  account: string;
  password: string;
  subscribed: boolean;
};
type AccountPersonalInfo = {
  nickname?: string;
  birth?: Date;
  gender?: Gender;
};

type PersonalAccount = AccountSystem & AccountPersonalInfo;

let accountVic: PersonalAccount = {
  account: "vic12345",
  password: "@asdfvic0000",
  gender: Gender.Male,
  subscribed: false,
};

console.log(accountVic);

// {
//    account: 'vic12345',
//    password: '@asdfvic0000',
//    gender: 0,
//    subscribed: false
// }

// function 選用參數
const add = (num1: number, num2?: number) => {
  if (num2) {
    return num1 + num2;
  } else {
    return num1 + 3;
  }
};

// 元組選用參數
type v = [string, string, string?, Date?];
