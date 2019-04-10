// https://www.youtube.com/watch?v=VBMGnAPfmsY&t=0s&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=14
// наследование на основе prototype
'use strict';

function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Rect.prototype.toString = function() {
    return `[${this.x}. ${this.y}, ${this.width}, ${this.heigth}]`;  
};

function Square(x, y, side) {
    Rect.call(this, x, y, side, side);
};

Object.setPrototypeOf(Square.prototype, Rect.prototype);
// или
// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;
// или
// Square.prototype = new Rect();
// Square.prototype.constructor = Square;