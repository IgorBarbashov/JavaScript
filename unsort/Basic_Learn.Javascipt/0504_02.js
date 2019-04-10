function makeBuffer() {
    var stringBuffer = [];

    function myBuffer() {
        if (arguments.length === 0) { // надо вернуть значение буфера
            var resultString="";

            for (var i = 0; i < stringBuffer.length; i++) {
                resultString += stringBuffer[i];
            }
            return resultString;

        } else { // надо добавить значение в буффер
            stringBuffer.push(arguments[0]);
        }
    }

    return myBuffer;
}



var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
