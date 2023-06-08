/**
 * [型別定義與宣告檔的作用 Type Definition & Declaration Files]
 *
 * 為了應對這種來自於第三方套件，想要從原生 JS —— 不需要重寫成 TypeScript 但依然能夠和 TypeScript 檔案協作的話 —— 型別定義（Type Declaration）就必須派上用場！
 */

/**
 * [使用宣告檔與型別定義的宣告 Using Declaration Files & Declaring Type Definition]
 * 1. 型別定義的宣告通常不會和主程式放在普通的 .ts 檔案，而是會額外放置在 .d.ts 檔案。
 * 2. 可以使用 declare 關鍵字宣告型別的定義。
 */
export declare let a: number;
export declare const b: string;
export declare type C = "abc";
export declare interface D {
    DMethod(): void;
}
export declare class E {
    e: number;
    constructor(e: number);
    EMethod(e: number): number;
}
export declare namespace F {
    export const a: string;
    const b: () => void;
}

/**
 * [正確引入第三方套件]
 *
 * 通常如果要下載具有 TypeScript Declaration File 版本的套件 —— 那些套件的名稱通常會有 @types 這個前綴字。
 * ex. `@type/node`, `@type/jquery` .etc
 *
 * $ npm install @type/<package>
 *
 * 通常 @types 系列套件只有型別宣告檔而沒有實際上實作的程式碼
 */
