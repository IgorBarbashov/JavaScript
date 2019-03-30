// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// пример каррирования
'use strict';

const sum3 = (a, b, c) => (a + b + c);
const carry = (fn, x) => (...args) => fn(x, ...args);

const f1 = carry(sum3, 10);
const f2 = carry(f1, 5);
const y = f2(1);
console.log(y);