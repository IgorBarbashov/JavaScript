"use strict";

var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var objArr = obj.className.split(" ");
    if ( objArr.indexOf(cls) == -1 ) objArr.push(cls);
    obj.className = objArr.join(" ");
}


addClass(obj, 'new'); // obj.className='open menu new'
alert( obj.className ); // "open menu new me"

addClass(obj, 'open'); // без изменений (класс уже существует)
alert( obj.className ); // "open menu new me"

addClass(obj, 'me'); // obj.className='open menu new me'
alert( obj.className ); // "open menu new me"
