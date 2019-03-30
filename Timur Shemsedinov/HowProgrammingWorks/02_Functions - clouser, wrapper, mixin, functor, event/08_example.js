// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// functor (функтор) - рекурсивное замыкание
'use strict';

function add(x) {
    const f = function(y) {
        const z = x + y;
        console.log(x + '+' + y + '=' + z);
        return add(z);
    };
    f.map = function(fn) {
        return fn(x);
    }
    return f;
};

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
a5.map(console.log);

// functor by lyambda-expression

function add(x) {
    const f = y => add(x + y);
    f.map = fn => fn(x);
    return f;
};
add(2)(7)(1).map(console.log);