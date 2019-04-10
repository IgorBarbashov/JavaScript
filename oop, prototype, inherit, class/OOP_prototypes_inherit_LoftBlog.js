// https://www.youtube.com/watch?v=SveV1LXwWZ4&list=PLY4rE9dstrJzNRmAeTHXAlT7lJFC2YjDg&index=4&t=0s
// прототипное наследование (переопределяем свойство prototype)
'use strict';

// связка __proto__ и prototype
var Foo = function() {
    this.name = 'Child';
};
var boo = new Foo();
console.log(boo);
console.log(boo.__proto__ === Foo.prototype);

// наследование переопределением свойства prototype у constructor
var obj = {
    name: 'Parent',
    age: 100,
    test: function() {
        console.log('тест');
    }
}
Foo.prototype = obj; // это означает, что: new Foo().__proto__ = obj;
var boo2 = new Foo();
console.log(boo2);
boo2.test();

// пример
var animal = {
    canRun: true
};
var Wolf = function() {
    this.name = 'Волк';
};
Wolf.prototype = animal;
Wolf.prototype.woo = function() {console.log(this.color, 'wo-o-o-o')};
var newWolf = new Wolf();
console.log(newWolf);
console.log(newWolf.name);
console.log(newWolf.canRun);
var GreyWolf = function() {
    this.color = 'Серый';
};
var BlackWolf = function() {
    this.color = 'Черный';
};
GreyWolf.prototype = newWolf;
BlackWolf.prototype = newWolf;
var greyWolf = new GreyWolf();
var blackWolf = new BlackWolf();
console.log(greyWolf.color,": " + greyWolf.name, ": " + greyWolf.canRun);
console.log(blackWolf.color, ": " + blackWolf.name, ": " + blackWolf.canRun);
greyWolf.woo();
blackWolf.woo();

// методы для работы с prototypes
console.log('**********************');
// получить прототип (результат ссылки __proto__)
console.log('методы для работы с prototypes');
console.log(greyWolf);
var greyWolfProto = Object.getPrototypeOf(greyWolf);
console.log(greyWolfProto);

console.log('**********************');
// возвращает есть ли собственное свойство
console.log( greyWolf.hasOwnProperty('name'));
for (let key in greyWolf) {
    console.log(key, ": " + greyWolf.hasOwnProperty(key) );
}

console.log('**********************');
// получить конструктор - ссылка на ту же самую функцию, которой этот объект был создан
var TestFunc = function(){
    this.testProp = 'testProp';
};
var testFunc = new TestFunc();
console.log(TestFunc.prototype);
console.log(TestFunc.prototype.constructor);
console.log(TestFunc.prototype.constructor === TestFunc);

console.log('**********************');
// (ECS5) создать объект на основе другого Object.create()
// объект, созданный при помощи Object.create(null), не имеет прототипа
var bird = { canFly: true };
var otherBird = Object.create(bird);
console.log(otherBird);
console.log(otherBird.canFly);