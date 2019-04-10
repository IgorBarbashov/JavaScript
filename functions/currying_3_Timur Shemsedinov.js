// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// раширенный вариант 09_example.js с возможностью определять синтаксис
// обработки полей DataSet
'use strict';

Function.prototype.mycurry = function(...args) {
    return this.bind(null, ...args);
};

const persons = [
    {name: 'Name1', city: 'City1', born: 101},
    {name: 'Name2', city: 'City2', born: 102},
    {name: 'Name3', city: 'City3', born: 103},
    {name: 'Name4', city: 'City4', born: 104},
    {name: 'Name5', city: 'City5', born: 105},
];

const md = {
    name: ['name', s=>`Hello ${s} !`],
    place: ['city', upper, s => '<!' + s + '!>'],
    age: ['born', age],
    born: ['born']
};

// v 10.1 - чисто функциональная парадигма
// const projection = (meta, obj) => (Object
//     .keys(meta)
//     .reduce( (hash, key) => ( hash[key] = meta[key]
//         .reduce(
//             (val, fn, i) => (i===0 ? obj[fn] : fn(val)), null
//         ), hash), {}
//     )
// );
// const p1 = projection.mycurry(md);
// const data = persons.map(p1);
// console.dir(data);

// v 10.2 - смешанная паврадишма с использованием замыканий и без карирования
const projection = (meta) => {
    const keys = Object.keys(meta);
    return obj => keys.reduce( (hash, key) => (
        hash[key] = meta[key].reduce(
            (val, fn, i) => (i===0 ? obj[fn] : fn(val)), null
        ), hash
    ), {} );
};
const p2 = projection(md);
const data2 = persons.map(p2);
console.dir(data2);


// вспомогательные функции обработки метаданных
function upper(s) {
    return typeof(s) === 'string' ? s.toUpperCase() : '';
}

function age(year) {
    return new Date().getFullYear() - new Date(year + '').getFullYear();
}