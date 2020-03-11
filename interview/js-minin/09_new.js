function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.job = 'developer';
Person.prototype.hello = function() {
    console.log(`${this.name} says Hello!`);
};

const boy = new Person('Igor', 40);
console.log(boy);
console.log(boy.job);
boy.hello();


function myNew(constructor, ...args) {
    const instance = {};
    Object.setPrototypeOf(instance, constructor.prototype);
    constructor.call(instance, ...args);
    return instance;
}

const girl = myNew(Person, "Ira", 38);
console.log(girl);
console.log(girl.job);
girl.hello();