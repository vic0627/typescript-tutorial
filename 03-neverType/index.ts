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