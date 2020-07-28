// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// createCalcFunction(42)();

// // ***************************

// function createIncrementor(a) {
//     return function(b) {
//         return a + b;
//     }
// };

// const incr3 = createIncrementor(3);
// console.log(incr3(10));
// console.log(incr3(20));

// const incr10 = createIncrementor(10);
// console.log(incr10(100));
// console.log(incr10(200));

// // ***************************

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`;
//     }
// };

// const igorDomain = urlGenerator('igor.ru');
// console.log(igorDomain('closure'));
// console.log(igorDomain('context'));
// console.log(igorDomain('prototype'));

// const ruDomain = urlGenerator('ru');
// console.log(ruDomain('yandex'));

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Igor", age: 40, job: "Frontend" };
const person2 = { name: "Ira", age: 38, job: "Povar" };

// function bind(context, func) {
//     return func.bind(context);
// };

function bind(context, func) {
    return function(...arg) {
        func.apply(context, arg);
    }
};

bind(person1, logPerson)();
bind(person2, logPerson)();