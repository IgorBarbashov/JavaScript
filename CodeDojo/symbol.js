// https://www.youtube.com/watch?v=LVEDsq6_WrA&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q&index=21&t=0s
// создание Symbols
let symbol1 = Symbol('name');
let symbol2 = Symbol('name');

let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');

console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);

console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4);

let name =Symbol.keyFor(symbol4);
console.log(name);

// использование Symbols
let user = {
    username: 'r2d2',
    [Symbol.for('password')]: '3cpo'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

let pass = user[Symbol.for('password')];
console.log(pass);

console.log(Object.getOwnPropertySymbols(user));