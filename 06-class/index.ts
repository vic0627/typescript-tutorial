//// Syntax

// Basic:
// class Class {
//     Propperty: type;
//     Method(argument: type): returnType {
//         ...
//     }
// }
class Max {
    name: string = "Max";
    age: number = 12;
    isMale: boolean = true;
    print(): void {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            isMale: ${this.isMale}
        `);
    }
}

// Create object from class
// const O = new C(...arguments)
const max = new Max();
max.print();

//// Constructor Function
// The arguments of constructor must be annotated; otherwise, type "any" will be inferred from the arguments, potentially causing implicit any issue.
// You can also pass default parameters to constructor.
// class Class {
//     Property: TypeError;
//     constructor(argument: type) {
//         this.Property = this.Property;
//     }
//     Method(argument: type): returnType {
//         ...
//     }
// }
class Person {
    // property
    name: string;
    age: number;
    isMale: boolean;

    // constructor
    constructor(name: string, age: number, isMale: boolean) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }

    // method
    print(): void {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            isMale: ${this.isMale}
        `);
    }
}
const joanne = new Person("Joanne", 25, false);
joanne.print();

//// Access Modifiers
// Define the visibility and accessibility of class members(properties and methods). TS provides three access modifiers: `public`, 'private`, and `protected`. These modifiers determine how class members can be accessed and interacted with from within the class and from external code.
// 1. `public`: Members declared as `public` are accessible from anywhere, both within the class and from external code. This is the default access modifier if no access modifier is specified explicitly.
// 2. `private`: Members declares as `private` are only accessible within the class itself. They cannot be accessed or modified from outside the class.
// 3. `protected`: Members declared as `protected` are accessible within the class itself and by derived(從中獲得/dɪˈraɪv/) classes(subclasses) that inherit from the base class. They are not accessible from external code that is not part of the class hierarchy(等級制度/ˈhaɪ.rɑːr.ki/).
// define the user information of ATM
type UserAccount = {
    account: string;
    password: string;
    money: number;
};
// define AccountSystem interface
interface AccountSystem {
    // A user who logs into the ATM system and represents no one if it is undefined
    // currentUser: UserAccount | undefined;

    // log into the system
    signIn(account: string, password: string): void;

    // log out
    signOut(): void;
}
// define TransactionSystem interface
interface TransactionSystem {
    // save money
    deposit(amount: number): void;

    // withdraw money
    withdraw(amount: number): void;
}
// define the completed ATM system by 'extends'
interface ATMSystem extends AccountSystem, TransactionSystem {}
// `implements`
// In TS, the `implements` keyword is to define that a class implements a particular interface. It establishes a contract between the class and the interface, starting that the class must provide implementations for all the members(properties, methods, etc.)defined in the interface.
// create ATM by `implements`
class ATM implements ATMSystem {
    private currentUser: UserAccount | undefined;

    constructor(private users: UserAccount[]) {}

    signIn(account: string, password: string): void {
        this.currentUser = this.users.find(
            (user: UserAccount) =>
                user.account === account && user.password === password
        );
        if (this.currentUser === undefined) throw new Error("User not found!");
    }

    signOut(): void {
        this.currentUser = undefined;
    }

    deposit(amount: number): void {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        } else {
            throw new Error("Please Signin first!");
        }
    }

    withdraw(amount: number): void {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        } else {
            throw new Error("Please Signin first!");
        }
    }
}
const printInfo = (input: UserAccount | undefined): void => {
    if (input === undefined) {
        console.log("User not found!");
    } else {
        console.log(`
            Current User: ${input.account}
            Money: ${input.money}
        `);
    }
};
// initialize a ATM
const users: UserAccount[] = [
    { account: "Joanne", password: "asd123", money: 10 },
    { account: "Mike", password: "qwe123", money: 20 },
    { account: "Ivy", password: "zxc123", money: 1000000 },
];
const atm = new ATM(users);
// signin
atm.signIn("Joanne", "asd123");
// save money
atm.deposit(123456);
// logout
atm.signOut();

//// Class Inheritance
// Class inheritance in TypeScript allows a class to inherit properties and methods from anthor class, called the base class or superclass.
// The class that inherits from the base class is called the derived or subclass.
// To establish a class inheritance relationship in TypeScript, the `extends` keyword is used.
// The derived class extends the base class, inheriting all its members (properties and methods) and adding its own members or overriding the inherited ones.
class SuperClass {
    constructor(
        public str: string,
        protected boo: boolean,
        private num: number | null
    ) {}

    public printStr() {
        console.log(this.str);
    }
    protected printBoo() {
        console.log(this.boo);
    }
    private printNum() {
        console.log(this.num);
    }
}
// `super` keywords is used to refer to the parent class within a subclass. It is primarily used within the constructor of a subclass to call the constructor of the parent class and access its properties and methods.
// When a subclass extends a parent class, it inherits the properties and methods of the parent class. However, if the subclass defines its own constructor, it needs to call the constructor of the parent class to ensure that the initialization of the parent class is performed. This is where the `super` keyword comes into play.
// *** Passing all the required arguments of the parent class's constructor into `super()` is necessary when you are extending a class. ***
class SubClass extends SuperClass {
    constructor(
        public subStr: string,
        public subBoo: boolean,
        public subNum: number
    ) {
        super(subStr, subBoo, null);
        this.str;
        this.boo;
        // this.num  // access denied
        this.printStr;
        this.printBoo;
        //this.printNum  // access denied
        this.subStr;
        this.subBoo;
        this.subNum;
    }
}
// 1. SubClass can access all variables and methods that are not in private mode.
// 2. The object created by the SubClass class (using new) not only has the type of SubClass class but also, due to the inheritance relationship, simultaneously belongs to the SuperClass class.
const superClass = new SuperClass("super", false, 0);
console.log("superClass.str: " + superClass.str);
superClass.printStr();
const subClass = new SubClass("sub", true, 1);
console.log("subClass.str: " + subClass.str);
console.log("subClass.subStr: " + subClass.subStr);
console.log("subClass.subBoo: " + subClass.subBoo);
console.log("subClass.subNum: " + subClass.subNum);
subClass.printStr();
console.log(
    `superClass instanceof SuperClass: ${superClass instanceof SuperClass}`
);
console.log(
    `superClass instanceof SubClass: ${superClass instanceof SubClass}`
);
console.log(
    `subClass instanceof SuperClass: ${subClass instanceof SuperClass}`
);
console.log(`subClass instanceof SubClass: ${subClass instanceof SubClass}`);

// *** Classes and Interfaces themselves are also a kind of Type Alias ***

//// Static Properties & Methods
// In OOP(object-oriented programming), static properties and methods are associated with the class itself rather than indiviual instances of the class.
// They are defined at the class level and can be accessed directly on the class without the need for creating an instance of the class.
// Access modifiers in TypeScript can also be applied to static properties and methods.
class Circle {
    private static readonly PI = Math.PI;
    static calculateArea(radius: number) {
        return this.PI * radius * radius; // `this.prop`: legal, but not recommend
    }
    static getPI = () => Circle.PI; // `className.prop`: the safe way to access static member
}
console.log(Circle.calculateArea(23));
console.log(Circle.getPI());
// TS allows accessing static members using `this.prop` instead of `className.prop` for convenience and flexibility.
// Although it may appear as if `this.prop` violates the static nature of the member, TS still resolves the reference correctly to the static member of the class.

//// Accessors
// Accessors, also known as getters and setters, are a feature in TS(and JS) that allow you to define methods to get and set the values of class properties.
// They provide a way to control access to class members and add logic when getting or setting their values.
class Dick {
    // Member varible will automatically be readonly if the getter has been defined without defining the setter.
    private _myDick: number = 18; // <- readonly
    get myDick(): string {
        return `My dick is ${this._myDick}cm!`;
    }

    // For consistency, type safety, and maintainability reasons, TS is a recommended practice for the type of return value of a getter to match the type defined in the setter's argument.
    private _juice: number = 3;
    // You can't pass any arguments into a getter.
    get dickJuice(): string {
        return `My dick can produce ${this._juice}ml of juice on one shot~`;
    }
    // Setter only allows to have one parameter.
    set dickJuice(ml: string) {
        const cache: number = Number(ml);
        if (isNaN(cache))
            throw new TypeError("String could only contain numbers!");
        this._juice = cache;
    }
}
const dick = new Dick();
console.log(dick.myDick);
console.log(dick.dickJuice);
dick.dickJuice = "5";
console.log(dick.dickJuice);

//// Design Pattern: Singleton Pattern
// The Singleton Pattern is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.
// It is commonly used when you need to limit the number of instances of a class to one and provide a single, shared instance across different parts of your code.
// The key features of the Singleton Pattern are:
//      1. `Single Instance`: The Singleton class guarantees that only one instance of the class is created throughout the application's lifecycle. Any requests for an instance of the class will return the same instance.
//      2. `Global Access`: The Singleton instance is accessible from anywhere within the application. It provides a globally available point of access, allowing other parts of the code to interact with the instance easily.
// The Singleton Pattern is useful in various scenarios, such as:
//      1. `Shared Resources`: When multiple parts of the application need to access a shared resource, such as database connection, file system, or network connection, the Singleton Pattern ensures that they all use the same instance, avoiding conflicts and resource duplication.
//      2. `Configuration Settings`: Singleton can be used to store and access global configuration settings that need to be accessed by different parts of the application.
//      3. `Logging and Error Handling`: Singleton can be employed to centralize logging or error handling functionality, ensuring that all logs or errors are handled consistently.

class SingletonPerson {
    private static instance: SingletonPerson;

    private constructor(
        public readonly name: string,
        public readonly age: number
    ) {
        // Private Constructor
    }

    public static getInstance(name?: string, age?: number): SingletonPerson {
        if (!SingletonPerson.instance) {
            name = name ?? "Joanne";
            age = age ?? 25;
            SingletonPerson.instance = new SingletonPerson(name, age);
        }
        return SingletonPerson.instance;
    }

    public printPerson() {
        console.log(`Hi, this is ${this.name}, and I'm ${this.age} years old!`);
    }
}
const ins1 = SingletonPerson.getInstance();
ins1.printPerson();
const ins2 = SingletonPerson.getInstance("John", 34);
ins1.printPerson();
console.log(ins1 === ins2);
