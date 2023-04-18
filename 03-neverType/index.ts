const forever = () => {
  while (true) {
    //...
  }
};

const ran = Math.random();

const ifForever = (n: number) => {
  while (n >= 0.5) {
    //...
  }
};

ifForever(ran);
ifForever(0.1);
ifForever(0.6);

type N = number | never;
type T = void | never;
type U = any | never;

type MustBeNever = number & never;

function op(n: any) {
  return n + n;
}

let anyT: any;
let unT: unknown;

anyT = 123;
anyT = "123";
anyT = true;
anyT = null;
anyT = undefined;
anyT = {};
anyT = [];
anyT = () => {};
anyT = new Object();

unT = 123;
unT = "123";
unT = true;
unT = null;
unT = undefined;
unT = {};
unT = [];
unT = () => {};
unT = new Object();

let isN: number;
let isS: string;
let isB: boolean;
let isNull: null;
let isU: undefined;

isN = anyT;
isS = anyT;
isB = anyT;
isNull = anyT;
isU = anyT;
unT = anyT;

// isN = unT;
// isS = unT;
// isB = unT;
// isNull = unT;
// isU = unT;
anyT = unT;

const jsonStr = `{
  "name": "Hank"
  "age": "25"
}`;

const parseHank = JSON.parse(jsonStr);

parseHank.name

const safeParse = (str: string): unknown => {
  return JSON.parse(str);
};

const safeParseHank = safeParse(jsonStr);

// safeParseHank.name

type t00 = unknown & null;
type t01 = unknown & undefined;
type t02 = unknown & null & undefined;
type t03 = unknown & string;
type t04 = unknown & string[];
type t05 = unknown & any;

type t10 = unknown | null;
type t11 = unknown | undefined;
type t12 = unknown | null | undefined;
type t13 = unknown | string;
type t14 = unknown | string[];
type t15 = unknown | any;