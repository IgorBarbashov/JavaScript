function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const number = numberGen(7);

// *************************

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0;
        return {
            next() {
                return i < n ? { value: ++i, done: false } : { value: undefined, done: true };
            }
        }

    }
}

for (let k of iterator) {
    console.log(k);
}

// *************************
console.log('// *************************');

function* genNum(n = 10) {
    for (i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of genNum(5)) {
    console.log(k);
}