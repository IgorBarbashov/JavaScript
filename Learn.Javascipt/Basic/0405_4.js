var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
    multiplyNumeric(menu);
/*  
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
*/

function multiplyNumeric(object) {
    for (var key in object) {
        if ( isNumeric(object[key]) ) {
            object[key] *= 2;
        }
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}