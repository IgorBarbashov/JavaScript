const person = new Object({
    name: 'Igor',
    age: 40,
    greet: function() {
        console.log('Greet!');
    }
});

Object.prototype.sayHello = function() {
    console.log('Hello!');
};

const igor = Object.create(person);

igor.greet();
igor.sayHello();

// строка - это тоже объект
const str = "I am string";
str.sayHello();