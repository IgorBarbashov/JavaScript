// Interface Segregation Principle

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} умеет ходить`);
  }
  swim() {
    console.log(`${this.name} умеет плавать`);
  }
  fly() {
    console.log(`${this.name} умеет летать`);
  }
}

class Dog extends Animal {
  fly() { return null; }
}
class Eagle extends Animal {
  swim() { return null; }
}
class Whale extends Animal {
  walk() { return null; }
  fly() { return null; }
}

// в инстансе каждого класса, наследующего класс Animal
// доступны все его методы, но невторые из них для данного
// инстанса некорректны
// поэтому мы вынуждены их в наследующих классах отменять.
// это является нарушением принципа ISP
const dog = new Dog('Рэкс');
dog.walk();
dog.swim();
dog.fly(); // некорректо

const eagle = new Eagle('Орел');
eagle.walk();
eagle.swim(); // некорректно
eagle.fly();

const whale = new Whale('Моби-дик');
whale.walk(); // некорректно
whale.swim();
whale.fly(); // некорректно

// исправленный пример (используется composition API)
// этот пример характерен только для js, с его прототипным наследованием
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`);
  }
}
const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`);
  }
}
const flyer = {
  fly() {
    console.log(`${this.name} умеет летать`);
  }
}
class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flyer, walker);
Object.assign(Whale.prototype, swimmer);
// теперь в каждом дочернем классе у нас просто нет
// тех методов, которые не использует их инстансы

const dog = new Dog('Рэкс');
dog.walk();
dog.swim();
// dog.fly();
const eagle = new Eagle('Орел');
eagle.walk();
// eagle.swim();
eagle.fly();
const whale = new Whale('Моби-дик');
// whale.walk();
whale.swim();
// whale.fly();