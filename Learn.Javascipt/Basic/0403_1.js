var str = prompt("Введите строку: ", "");
alert ( ucFirst(str) );

function ucFirst(str) {
    if (str.length == 0) return "Введена пустая строка";
    var newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}