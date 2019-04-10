var str = prompt("Строка: ", "");
alert( extractCurrencyValue(str) );

function extractCurrencyValue(str) {
    return parseInt( str.slice(1) );
}