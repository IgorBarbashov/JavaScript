// https://www.youtube.com/watch?v=xJn3k1f4BiM&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=3&t=0s
// Пример создания класса и наследования с использованием class
'use stric';

const Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

const serializable = Category => class extends Category {
    toSring() {
        return `[${this.x}, ${this.y}]`;
    };
};

const movable = Category => class extends Category {
    move(x,y) {
        this.x += x;
        this.y += y;
    };
};

const PointEx = serializable(movable(Point)); // создаем новый класс-наследник двух других классов
const point1 = new PointEx(10, 20); // создаем экземпляр нового класса (в нем есть все методы)
point1.move(5, -2);
console.log(point1.toSring());
const { x, y } = point1;
console.log(x, y);