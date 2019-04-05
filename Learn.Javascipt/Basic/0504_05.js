function inBetween(a, b) {
    return function(x) {
        return x>=a && x<=b;
    }
}

function inArray(myArr) {
    return function(x) {
        if ( myArr.indexOf(x) >= 0 ) return true;
        return false;
    }
}

function filter(arr, func) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        if ( func(current) ) newArr.push(current);
    }

    return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2