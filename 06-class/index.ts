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
// define ticket types by `enum`
enum TransportTicketType {
    Train,
    MRT,
    Aviation,
}
// using tuple to define time format [hour, minute, second]
type TimeFormat = [number, number, number];
// define ticket system
class TicketSystem {
    constructor(
        private type: TransportTicketType,
        private startingPoint: string,
        private destination: string,
        private departureTime: Date
    ) {}

    // caculate the time during traveling
    private deriveDuration(): TimeFormat {
        return [1, 0, 0];
    }

    // caculate arrival time
    private deriveArrivalTime(): Date {
        const { departureTime } = this;

        // convert the interval's time to microseconds
        const [hour, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hour * 60 * 60 + minutes * 60 + seconds;
        const durationMilliseconds = durationSeconds * 1000;

        // retun arrival time
        const arrivalMilliseconds =
            departureTime.getTime() + durationMilliseconds;
        return new Date(arrivalMilliseconds);
    }

    // print details from ticket
    public getTicketInfo(): void {
        const ticketName = TransportTicketType[this.type];
        const arrivalTime = this.deriveArrivalTime();
        console.log(`
            Ticket Type: ${ticketName}
            Station: ${this.startingPoint} - ${this.destination}
            Departure: ${this.departureTime}
            Arrival: ${arrivalTime}
        `);
    }
}
const randomTicket = new TicketSystem(
    TransportTicketType.Aviation,
    "Taipei",
    "Tokyo",
    // 2023/09/01 AM09:00:00
    new Date(2023, 8, 1, 9, 0, 0)
);
randomTicket.getTicketInfo();
// extends class
type Airport = {
    name: string;
    nextStop: string;
    duration: TimeFormat;
};
class AirTickets extends TicketSystem {
    private stops: string[] = [
        "Taipei",
        "Hong Kong",
        "Tokyo",
        "Bangkok",
        "Singapore",
        "Duba",
    ];

    private AirportDetail: Airport[] = [
        { }
    ]
}
