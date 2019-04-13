// https://coursehunters.net/course/hexlet-js-async
// асинхронность на call-back'ах на примере map и timer
'use strict';

// реализация синхронного map
const map = (coll, fn) => {
    if (coll.length === 0) {
        return coll;
    }
    const iter = ([head, ...rest], acc) => {
        const newAcc = [...acc, fn(head)];
        if (rest.length === 0) {
            return newAcc;
        };
        return iter(rest, newAcc);
    };
    return iter(coll, []);
};

// реализация асинхронного map
const asyncMap = (coll, fn, callback) => {
    if (coll.length === 0) {
        callback(coll);
        return;
    }
    const iter = ([head, ...rest], acc) => {
        const newAcc = [...acc, fn(head)];
        if (rest.length === 0) {
            callback(newAcc);
            return;
        };
        setTimeout(iter, 0, rest, newAcc);
    };
    iter(coll, []);
};

const coll = [4, 5, 10];
asyncMap(coll, item => item*2, result => {console.log(result)});