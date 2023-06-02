const message = "Hello World";

const say = (somthing: string): void => {
    console.log(somthing);
};

say(message);

type person = {
    readonly _password: string;
    readonly _token: string;
    name: string;
    age: number;
    phone: number | string;
    email?: string;
};

const John: person = {
    name: "John D.",
    age: 34,
    phone: 0912345543,
    _password: "asdb3242rdq",
    _token: "njdvu0/*645as$dfsd@#$E3ssdg",
};


