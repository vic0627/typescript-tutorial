/**
 * [泛用型別 Generics]
 *
 * 原理跟普通的函式概念差不多，只是可以把泛用型別看成是型別版的函式。
 *
 * `type A<T> = T`
 *
 * 代入的 A<T> 裡面的 T 是什麼樣的型別，T 就會成為那個型別。
 *
 * 泛用型別的意義最主要是將型別化名進行參數化（Parameterize）的動作
 * ，使得型別化名擁有更多的彈性與變化性。
 */

type Id<T> = T;
const a: Id<number> = 3;

/**
 * [泛用化名 Generic Type Alias]
 *
 * 任何型別化名都可以轉換成泛用型別
 *
 * 型別（Types）、介面（Interface）與類別（Class）都可以轉換成泛用型式。
 */
type Dictionary<T> = {
    [prop: string]: T;
};
interface LinkedList<T> {
    head: LinkListNode<T> | null;
    length: number;
    at(index: number): LinkListNode<T> | null;
}
interface LinkListNode<T> {
    value: T;
    next: LinkListNode<T> | null;
}
class TypedArray<T> {
    constructor(public values: T[]) {}
}

/**
 * [泛用函式與泛用參數 Generic Functions & Generic Function Parameters]
 *
 * 函式本身也可以變成泛用的形式
 */
/**
 * [函式型別的泛用形式 Function Type Generic Representation]
 */
type operator<T> = (p1: T, p2: T) => T;
const add: operator<number> = (p1: number, p2: number) => p1 + p2;
/**
 * [函式本身就是泛用型式 Function Itself is Generic]
 * 你可以在宣告函式的時候就把它變成泛用的形式。
 */
function aFunc<T>(p: T): T {
    return p;
}
aFunc<number>(3);
/**
 * [多重泛用參數 Multiple Generic Type Parameters]
 */
type TConvert<T, U> = (input: T) => U;
const isPositive: TConvert<number, boolean> = (i: number) => i > 0;
isPositive(3);

/**
 * [內建的泛用型別 Built-in Generics]
 */
type MyArray<T> = T[];

/**
 * [條件型別 Conditional Types]
 *
 * Required<T>
 *
 * 將所有 T 裡面的選用屬性轉成必要的屬性。
 */
interface I {
    a: string;
    b: number;
    c?: string;
}
const c: Required<I> = {
    a: "asd",
    b: 2,
    c: "dfa", // <- 變成必要
};
