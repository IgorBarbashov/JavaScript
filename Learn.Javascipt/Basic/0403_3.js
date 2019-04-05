var str = prompt("Строка: ", "");
var maxlength = +prompt("Длина: ", "");
alert ( truncate(str, maxlength) );

function truncate(str, maxlength) {
    var newStr = str;

    if (str.length > maxlength) {
        newStr = str.substring(0,  maxlength - 3) + "...";
    }

    return newStr;
}