// https://www.youtube.com/watch?v=VBMGnAPfmsY&t=0s&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=14
// наследование на основе class

'use strict';

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    toString() {
        return `[${this.x}. ${this.y}, ${this.width}, ${this.heigth}]`;
    }
}

class Square extends Rect {
    constructor(x, y, side) {
        super(x, y, side, side);
    }
}