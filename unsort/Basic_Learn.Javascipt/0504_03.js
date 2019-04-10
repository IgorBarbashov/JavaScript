function makeBuffer() {
    var stringBuffer = [];

    function myBuffer() {
        if (arguments.length === 0) {
            var resultString="";

            for (var i = 0; i < stringBuffer.length; i++) {
                resultString += stringBuffer[i];
            }
            return resultString;

        } else {
            stringBuffer.push(arguments[0]);
        }
    }

    myBuffer.clear = function() {
        stringBuffer.splice(0);
    }
    
    return myBuffer;
}



var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();
buffer("La-la-la");

alert( buffer() ); // ""