function argSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

alert ( argSum() );
alert ( argSum(1) );
alert ( argSum(1, 2) );
alert ( argSum(1, 2, 3) );
alert ( argSum(1, 2, 3, 4) );