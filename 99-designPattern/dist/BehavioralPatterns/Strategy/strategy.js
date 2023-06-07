"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = __importDefault(require("../../utils/print"));
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA {
    doAlgorithm(data) {
        return data.sort();
    }
}
class ConcreteStrategyB {
    doAlgorithm(data) {
        return data.reverse();
    }
}
/**
 * The Context defines the interface of interest to client.
 */
class Context {
    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtume.
     */
    constructor(strategy) {
        this.strategy = strategy;
    }
    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    doSomeBusinessLogic(data) {
        const result = this.strategy.doAlgorithm(data);
        console.log(result.join(", "));
    }
}
const { Scope, printBlock } = print_1.default;
exports.default = printBlock(Scope.h2, "Strategy Pattern", function () {
    const context = new Context(new ConcreteStrategyA());
    const data = ["b", "d", "c", "a", "e"];
    console.log("Original data: " + data.join(", "));
    console.log("use StrategyA");
    context.doSomeBusinessLogic(data);
    context.setStrategy(new ConcreteStrategyB());
    console.log("use StrategyB");
    context.doSomeBusinessLogic(data);
});
