// https://www.youtube.com/watch?v=VBMGnAPfmsY&t=0s&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=14
// примеры - у кого какие prototypes
'use strict';

function Point(x, y) {
    this.x = x;
    this.y = y;
};

Point.from = function(obj) { // статический метод, он есть у класса (точнее конструктора Point), но не у его instance'ов
    const {x, y} = obj;
    return new Point(x, y);
};

Point.prototype.move = function(x, y) {
    this.x +=x;
    this.y +=y;
};

Point.prototype.toString = function() {
    return `[${this.x}. {this.y}]`;
};

console.log('function ptototype:', (function(){}).prototype);
console.log('lambda ptototype:', (()=>{}).prototype);

console.log('Point ptototype:', Point.prototype);
console.log('move ptototype:', Point.prototype.move.prototype);