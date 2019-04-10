// https://coursehunters.net/course/ponyatnyy-javascript-advanced
// https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-advanced-part-1/847
// AJAX - XMLHttpRequest
// 
'use strict';

const url = 'https://jsonplaceholder.typicode.com/posts';
const data = {
    title: 'John',
    body: Admin,
    userId: 1
};
const json = JSON.stringify(data);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(response);
    } else {
        console.error(response);
    }
};

// для обработки ошибок можно использовать событие onerror
xhr.onerror = function() {
    console.log('Error!');
};

xhr.send(json);