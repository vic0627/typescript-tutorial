const COMPARE_LOG = (type, instance) => console.log({ type, instance });
const LOG = (any) => console.log(any);

// 數字

const numByValue = 10;
COMPARE_LOG(typeof numByValue, numByValue instanceof Number);
// { type: 'number', instance: false }

const numByNumber = Number(10);
COMPARE_LOG(typeof numByNumber, numByNumber instanceof Number);
// { type: 'number', instance: false }

const numByNewNumber = new Number(10);
COMPARE_LOG(typeof numByNewNumber, numByNewNumber instanceof Number);
// { type: 'object', instance: true }

// 字串

const str = "abc";
COMPARE_LOG(typeof str, str instanceof String);
// { type: 'string', instance: false }

const strByString = String("abc");
COMPARE_LOG(typeof strByString, strByString instanceof String);
// { type: 'string', instance: false }

const strByNewString = new String("abc");
COMPARE_LOG(typeof strByNewString, strByNewString instanceof String);
// { type: 'object', instance: true }

// 布林

const boo = true;
COMPARE_LOG(typeof boo, boo instanceof Boolean);
// { type: 'boolean', instance: false }

const booByBoolean = Boolean(true);
COMPARE_LOG(typeof booByBoolean, booByBoolean instanceof Boolean);
// { type: 'boolean', instance: false }

const booByNewBoolean = new Boolean(true);
COMPARE_LOG(typeof booByNewBoolean, booByNewBoolean instanceof Boolean);
// { type: 'object', instance: true }
