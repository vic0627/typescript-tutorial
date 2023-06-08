/**
 * [命名空間 Namespaces]
 *
 * 命名空間主要的目的是"組織"並且"包裝"程式碼。
 *
 * 每個人寫的程式、套件、框架等，在變數、函式、類別等等的命名上可能會有重複，因此在兩個套件共同使用下，可能產生"變數命名上的衝突"。
 *
 * 而宣告名為 Namespace 的區塊，每個程式碼或套件等，可以建立起自己的獨立空間，自由使用命名而不需擔心汙染問題。
 */

/**
 * [宣告命名空間 Namespaces Declaration]
 * 1. 要讓命名空間提供各種功能，需使用關鍵字`export`。
 * 2. 呼叫內部的屬性的功能用`.`。
 */
namespace MyMath {
    export const PI = 3.14;
    export const AOC = (rad: number) => PI * rad ** 2;
    export const AOR = (w: number, h: number) => w * h;
    export const COC = (rad: number) => 2 * PI * rad;
    export const COR = (w: number, h: number) => 2 * (w + h);
}
MyMath.PI;
MyMath.AOC(3);
MyMath.AOR(4, 7);

/**
 * [巢狀命名空間 Nested Namespaces/Multi-layer Namespaces]
 * 可以運用巢狀命名空間將程式碼整理到不同的區塊，並且任何內部的命名空間要被外部使用時，必須標註`export`關鍵字。
 */
namespace MyMath2 {
    export namespace Circ {
        export const PI = 3.14;
        export const area = (rad: number) => PI * rad ** 2;
        export const circum = (rad: number) => 2 * PI * rad;
    }
    export namespace Rect {
        export const area = (w: number, h: number) => w * h;
        export const circum = (w: number, h: number) => 2 * (w + h);
    }
}
MyMath2.Circ.area(4);
MyMath2.Rect.area(2, 4);

/**
 * [命名空間可以輸出的功能 Exportable Utilities From Namespaces]
 * 1. 變數 - variable
 * 2. 函式 - function
 * 3. 型別 - type & enum
 * 4. 介面 - interface
 * 5. 類別 - class
 * 6. 命名空間 - namespace
 */

/**
 * [命名空間的融合 Namespaces Merging]
 * 跟介面的融合 Interface Merging 概念很像，不過官方統稱為宣告的融合 Declaration Merging。
 */
namespace MyMath3 {
    export const share = "share";
    export namespace Circ {
        export const PI = 3.14;
        export const area = (rad: number) => PI * rad ** 2;
        export const circum = (rad: number) => 2 * PI * rad;
    }
    export namespace Share {
        export const share = "share";
    }
}
namespace MyMath3 {
    export namespace Rect {
        export const share2 = share;
        export const area = (w: number, h: number) => w * h;
        export const circum = (w: number, h: number) => 2 * (w + h);
    }
    export namespace Share {
        export const share2 = share;
    }
}
/**
 * [命名空間下的變數作用域]
 * 1. 共享的變數要用`export`輸出。
 * 2. 閉包特性與塊級作用域類似，只能存取同名同級、同名父級的變數。
 */

Circle.PI