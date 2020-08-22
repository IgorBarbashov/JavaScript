// Open Close Principle

class Shape {
  area() {
    throw new Error('Метод area() должен быть реализован');
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
    // this.type = 'square';
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    // this.type = 'circle';
  }

  area() {
    return (this.radius ** 2) * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    // this.type = 'rect';
  }

  area() {
    return this.width * this.height;
  }
}

class AreaCalculator {
  // здесь нарушается принцип OCP, т.к. если мы будем
  // расширять перечень фигур, то нам придется изменять метод sum()
  // вариант решения - классы фигур должны имплеминтировать интерфейс,
  // который заставляет их реализовывать метод area()
  // (пример - классы Shape и метод rightSum())
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  // sum() {
  //   return this.shapes.reduce((acc, shape) => {
  //     if (shape.type === 'square') {
  //       acc += shape.size ** 2;
  //     } else if (shape.type === 'circle') {
  //       acc += (shape.radius ** 2) * Math.PI;
  //     } else if (shape.type === 'rect') {
  //       acc += shape.width * shape.height;
  //     }

  //     return acc;
  //   }, 0);
  // }

  // теперь этот метод не требует изменения
  // так же в каждом классе фигур не нужен this.type
  rightSum() {
    return this.shapes.reduce((acc, shape) =>
      ( acc += shape.area() ), 0);
  }
}

const calc = new AreaCalculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rectangle(10, 20),
]);

// console.log(calc.sum());
console.log(calc.rightSum());
