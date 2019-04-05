"use strict";

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
