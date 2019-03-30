// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
//функции высшего порядка
// если function на входе - это либо: callback, listener, iterator
// если function на выходе - это clouser (замыкание)
// если function и на входе и на выходе - wrapper

'use strict';

// пример 1 - callback
function fn (callback) {
    callback(null, 'Data');
    return 'Value';
};
fn( (err, data) => console.dir({data}) ); // в качестве callback передаем лямбду


// пример 2 - simple clouser
function fn(a) {
    const b = 'Closure variable';
    return function(c) {
        console.dir({a, b, c});
    };
};
const f1 = fn('Parametr 1');
f1('Parametr 2');
const f2 = fn('Parametr X');
f2('Parametr Y');


// пример 3 - nested clousers
function fn(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};
const f1 = fn(1);
const f2 = f1(2);
const res = f2(3);
console.log(res);

// пример 3.a - nested clousers by lyambda-expression
const fn = a => b => c => a + b + c;
console.log( fn(10)(20)(30) );


// пример 4 - замыкание для кэша
function fn() {
    console.log('Generate cash');
    const cash = {};
    return function(a) {
        let arg = cash[a];
        if (arg) {
            console.log('Taking arg from cash');
            return arg;
        } else {
            console.log('New argument, let\'s calculate');
            cash[a] = a;
            return 'Value: ' + a;
        }
    };
};
const f1 = fn();
const f2 = fn();
f1(1);
f1(2);
f1(1);
f1(2);
f2(1);
f2(2);
f2(1);
f2(2);