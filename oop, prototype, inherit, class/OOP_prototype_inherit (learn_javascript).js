// https://learn.javascript.ru/class-inheritance
// наследование на прототипах - итоговый код с двумя классами Animal и Rabbit
'use strict';

// 1. Конструктор Animal
function Animal(name) {
    this.name = name;
    this.speed = 0;
};
  
// 1.1. Методы -- в прототип
Animal.prototype.stop = function() {
    this.speed = 0;
    console.log( this.name + ' стоит' );
};
  
Animal.prototype.run = function(speed) {
    this.speed += speed;
    console.log( this.name + ' бежит, скорость ' + this.speed );
};
  
// 2. Конструктор Rabbit
function Rabbit(name) {
    Animal.apply(this ,arguments);
}
  
// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
  
// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
    this.speed++;
    console.log( this.name + ' прыгает, скорость ' + this.speed );
}