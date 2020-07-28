function hello() {
    console.log('Hello', this);
};

const person = {
    name: 'Igor',
    age: 40,
    sayHello: hello,
    sayHelloGlobal: hello.bind(global),
    info: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.log(`Phone is: ${phone}`);
        console.groupEnd();
    },
};

const ira = {
    name: 'Ira',
    age: 38,
};

// hello();
// person.sayHello();
// person.sayHelloGlobal();
// person.info();
// person.info.bind(ira, 'povar')('999');
// person.info.bind(ira)('povar', '999');
// person.info.call(ira, 'povar', '999');
// person.info.apply(ira, ['povar', '999']);


// ***************************************

const arr = [1, 2, 3, 4, 5];
// arr.__proto__.multBy = function(num) {
//     return this.map(i => i * num);
// }
Array.prototype.multBy = function(num) {
    return this.map(i => i * num);
}

// console.log(arr.multBy(5));
console.log([10, 20, 30].multBy(4));
