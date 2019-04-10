var arr = [1, 2, 3, 4, 5];

arr.sort(function(a, b){
    return Math.random()*100 - Math.random()*100;
}
);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
