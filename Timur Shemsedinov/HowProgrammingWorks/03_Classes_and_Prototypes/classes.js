// https://www.youtube.com/watch?v=VBMGnAPfmsY&t=0s&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=14
// то же что и в 'prototypes.js' - только на основе class

'use strict';

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    toString() {
        return `[${this.x}. {this.y}]`;
    }

    static from(obj) {
        const {x, y} = obj;
        return new Point(x, y);
    }
}

console.log('Point prototype', Point.prototype);
console.log('move prototype', Point.prototype.move.prototype);
console.log('constructor prototype', Point.constructor.prototype);
console.log('prototype constructor prototype', Point.prototype.constructor.prototype);