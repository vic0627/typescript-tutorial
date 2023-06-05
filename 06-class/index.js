"use strict";
//// Syntax
// Basic:
// class Class {
//     Propperty: type;
//     Method(argument: type): returnType {
//         ...
//     }
// }
class Max {
    constructor() {
        this.name = "Max";
        this.age = 12;
        this.isMale = true;
    }
    print() {
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
    // constructor
    constructor(name, age, isMale) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    // method
    print() {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            isMale: ${this.isMale}
        `);
    }
}
const joanne = new Person("Joanne", 25, false);
joanne.print();
// `implements`
// In TS, the `implements` keyword is to define that a class implements a particular interface. It establishes a contract between the class and the interface, starting that the class must provide implementations for all the members(properties, methods, etc.)defined in the interface.
// create ATM by `implements`
class ATM {
    constructor(users) {
        this.users = users;
    }
    signIn(account, password) {
        this.currentUser = this.users.find((user) => user.account === account && user.password === password);
        if (this.currentUser === undefined)
            throw new Error("User not found!");
    }
    signOut() {
        this.currentUser = undefined;
    }
    deposit(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error("Please Signin first!");
        }
    }
    withdraw(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error("Please Signin first!");
        }
    }
}
const printInfo = (input) => {
    if (input === undefined) {
        console.log("User not found!");
    }
    else {
        console.log(`
            Current User: ${input.account}
            Money: ${input.money}
        `);
    }
};
// initialize a ATM
const users = [
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
var TransportTicketType;
(function (TransportTicketType) {
    TransportTicketType[TransportTicketType["Train"] = 0] = "Train";
    TransportTicketType[TransportTicketType["MRT"] = 1] = "MRT";
    TransportTicketType[TransportTicketType["Aviation"] = 2] = "Aviation";
})(TransportTicketType || (TransportTicketType = {}));
// define ticket system
class TicketSystem {
    constructor(type, startingPoint, destination, departureTime) {
        this.type = type;
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.departureTime = departureTime;
    }
    // caculate the time during traveling
    deriveDuration() {
        return [1, 0, 0];
    }
    // caculate arrival time
    deriveArrivalTime() {
        const { departureTime } = this;
        // convert the interval's time to microseconds
        const [hour, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hour * 60 * 60 + minutes * 60 + seconds;
        const durationMilliseconds = durationSeconds * 1000;
        // retun arrival time
        const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
        return new Date(arrivalMilliseconds);
    }
    // print details from ticket
    getTicketInfo() {
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
const randomTicket = new TicketSystem(TransportTicketType.Aviation, "Taipei", "Tokyo", 
// 2023/09/01 AM09:00:00
new Date(2023, 8, 1, 9, 0, 0));
randomTicket.getTicketInfo();
