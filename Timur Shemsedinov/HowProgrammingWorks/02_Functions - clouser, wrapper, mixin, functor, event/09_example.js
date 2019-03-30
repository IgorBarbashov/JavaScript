// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// пример карирования (currying) спомощью bind через прототип Function и Object.keys
// пример использования методов высшего порядка у массивов
'use strict';

Function.prototype.mycurry = function(...args) {
    return this.bind(null, ...args);
};

const projection = (fileds, obj) => (Object
    .keys(obj).filter(filed => fileds.includes(filed))
    .reduce((hash, key) => (hash[key] = obj[key], hash), {})
);

const persons = [
    {name: 'Name1', city: 'City1', born: 101},
    {name: 'Name2', city: 'City2', born: 102},
    {name: 'Name3', city: 'City3', born: 103},
    {name: 'Name4', city: 'City4', born: 104},
    {name: 'Name5', city: 'City5', born: 105},
];

const p1 = projection.mycurry(['name', 'born']);
const p2 = projection.mycurry(['name']);

const data = persons.map(p1).map(p2);
console.dir(data);