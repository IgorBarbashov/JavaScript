// пример function chainings
// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
'use strict';

function hash() {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumerable: false, // убираем этот метод из пространства имен ключей объекта
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
    return data;
};

console.dir(
    hash()
        .add('name', 'Igor')
        .add('city', 'N.Novgorod')
        .add('born', '20 age')
);