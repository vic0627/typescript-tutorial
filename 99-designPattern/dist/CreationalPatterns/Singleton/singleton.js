"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = __importDefault(require("../../utils/print"));
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
const { Scope, printBlock } = print_1.default;
exports.default = printBlock(Scope.h2, "Singleton Pattern", function () {
    const ins1 = SingletonPerson.getInstance();
    ins1.printPerson(); // <- Hi, this is Joanne!
    const ins2 = SingletonPerson.getInstance("John");
    ins1.printPerson(); // <- Hi, this is Joanne!
    console.log(ins1 === ins2); // <- true
});
