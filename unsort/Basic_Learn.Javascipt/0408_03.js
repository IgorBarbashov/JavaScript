"use strict";

var obj = {
    className: 'open menu menu menu'
};

function removeClass(obj, cls) {
    var objArr = obj.className.split(" ");
    
    while (true) {
        var index = objArr.indexOf(cls);
        if ( index == -1 ) break;
        objArr.splice(index, 1);
        alert(objArr);
    }
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)