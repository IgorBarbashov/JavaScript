var arr = [5, 2, 1, -10, 8];

arr.sort(function fsort(a,b){
    return b-a;});

alert( arr ); // 8, 5, 2, 1, -10
