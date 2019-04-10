// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// композиция функций
'use strict';

const args = ['igor', 'pavel', 'vasya', 'michel'];

const upFirst = str => str.charAt(0).toUpperCase() + str.substr(1);
const upLast = str => str.slice(0, -1) + str.slice (-1).toUpperCase();
const rev = str => str.split('').reverse().join('');
const double = str => [...str].map( ch => ch + ch).join('');

const compose = (...funcs) => (...args) =>
    funcs.reduce( (args, func) =>
        args.map( arg => func(arg) ), args);

const change = compose(rev, double, upLast, upFirst);
console.log('Исходные данные', args);
console.log('Результат преобразования', change(...args));