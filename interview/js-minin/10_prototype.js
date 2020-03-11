let proto = { a: 10 };

const obj = Object.create(proto);

console.log(obj);
console.log(obj.__proto__);
console.log(obj.__proto__ === proto);

proto = {};

console.log(obj);
console.log(obj.__proto__);
console.log(obj.__proto__ === proto);