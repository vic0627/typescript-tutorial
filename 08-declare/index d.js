"use strict";
/**
 * [型別定義與宣告檔的作用 Type Definition & Declaration Files]
 *
 * 為了應對這種來自於第三方套件，想要從原生 JS —— 不需要重寫成 TypeScript 但依然能夠和 TypeScript 檔案協作的話 —— 型別定義（Type Declaration）就必須派上用場！
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.a += 1;
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
