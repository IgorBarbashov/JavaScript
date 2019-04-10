"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var targetName;
var maxSal = 0;
for (var key in salaries) {
    if (salaries[key] > maxSal) {
        maxSal = salaries[key];
        targetName = key;
    }
}

alert(targetName || "нет сотрудников");