"use strict";

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

var arr = [0, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr );
