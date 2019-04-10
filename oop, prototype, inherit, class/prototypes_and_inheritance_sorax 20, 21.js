// Наследование на основе прототипов

// первая часть - вводная, как это делается на основе функций и без new
var Person = {
    constructor: function(name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    greet: function () {
        console.log("Hello " + this.name);
    }
};

var Developer = Object.create(Person);
Developer.constructor = function(name, age, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};
Developer.develop = function() {
    console.log("Working....");
};

var webdev = Object.create(Developer).constructor("Vasya", 150, ["Java", "JavaScript"]);

console.log(webdev);
console.log(webdev.skills);
webdev.develop();

// Традиционная система наследования
console.log("*******************************");

var People, people, anotherPeople;

People = function(name, age) {
    this.name = name;
    this.age = age;
};
People.prototype.greet = function() {
    console.log("Privet " + this.name);
};
People.prototype.toString = function() {
    return ("Имя: " + this.name + ", Возраст: " + this.age);
};

var WebDeveloper = function(name, age, skills) {
    People.apply(this, arguments);
    this.skills = skills || [];
};
WebDeveloper.prototype = Object.create(People.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;

people = new People("Igor", 40);
console.log(people.name);
console.log(People.prototype);
people.greet();

people2 = new People("Ira", 35);
people2.greet();

webdev1 = new WebDeveloper("God", 90, ["Assembler", "TurboBasic", "Pascal"]);
console.log(webdev1.name);
console.log(webdev1.skills);
webdev1.greet();
console.log(webdev1.toString);
console.log("" + webdev1);

console.log("*******************************");
var classOf = function(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
};
console.log(classOf([]));
console.log(classOf({}));