var arr = [1,2,3,4,5];

function getSums(arr) {
    var result = [];

    arr.reduce( function(sum, num) {
        result.push(sum + num);
        return sum + num;
    }, 0);
    
    return result;
}

alert ( getSums(arr) );