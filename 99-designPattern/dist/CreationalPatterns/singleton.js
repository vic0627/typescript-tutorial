"use strict";
//// Design Pattern: Singleton Pattern
Object.defineProperty(exports, "__esModule", { value: true });
// The Singleton Pattern is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.
// It is commonly used when you need to limit the number of instances of a class to one and provide a single, shared instance across different parts of your code.
// The key features of the Singleton Pattern are:
//      1. `Single Instance`: The Singleton class guarantees that only one instance of the class is created throughout the application's lifecycle. Any requests for an instance of the class will return the same instance.
//      2. `Global Access`: The Singleton instance is accessible from anywhere within the application. It provides a globally available point of access, allowing other parts of the code to interact with the instance easily.
// The Singleton Pattern is useful in various scenarios, such as:
//      1. `Shared Resources`: When multiple parts of the application need to access a shared resource, such as database connection, file system, or network connection, the Singleton Pattern ensures that they all use the same instance, avoiding conflicts and resource duplication.
//      2. `Configuration Settings`: Singleton can be used to store and access global configuration settings that need to be accessed by different parts of the application.
//      3. `Logging and Error Handling`: Singleton can be employed to centralize logging or error handling functionality, ensuring that all logs or errors are handled consistently.
// The Singleton class defines the `getInstance` method that lets clients access the unique singleton instance.
class SingletonPerson {
    // Private Constructor
    // The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
    constructor(name) {
        this.name = name;
    }
    // Lazy Initialization
    // The static method that controls the access to the singleton instance.
    // This implemention let you subclass the Singleton class while keeping just one instance of each subclass around.
    static getInstance(name) {
        if (!SingletonPerson.instance) {
            name = name !== null && name !== void 0 ? name : "Joanne";
            SingletonPerson.instance = new SingletonPerson(name);
        }
        return SingletonPerson.instance;
    }
    // Public Methods
    // Any singleton should define some business logic, which can be executed on its instance.
    printPerson() {
        console.log(`Hi, this is ${this.name}!`);
    }
}
// The client code
function default_1() {
    console.log("========== Singleton Pattern Start ==========");
    const ins1 = SingletonPerson.getInstance();
    ins1.printPerson();
    const ins2 = SingletonPerson.getInstance("John");
    ins1.printPerson();
    console.log(ins1 === ins2); // true
    console.log("========== Singleton Pattern End ==========");
}
exports.default = default_1;
