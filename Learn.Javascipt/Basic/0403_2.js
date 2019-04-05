var str = prompt("Введите текст: ", "");
alert ( checkSpam(str) );

function checkSpam(str) {
    if ( ~str.toLowerCase().indexOf("viagra") || ~str.toLowerCase().indexOf("xxx")) return true;
    return false;
}