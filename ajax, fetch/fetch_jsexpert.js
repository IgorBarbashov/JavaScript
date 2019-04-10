// https://coursehunters.net/course/ponyatnyy-javascript-advanced
// https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-advanced-part-1/847
// асинхронный javascipt (сама концепция, Promise, fetch, Async/await)
// fetch
'use strict';

// get-запрос
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => { // здесь не ответ от сервера, а Promise
        return response.json(); //  return данных от сервера в следующий then
    })
    .then((data) => { // и работаем  с данными от сервера 
        console.log(data);
    });


// post-запрос
const options = {
    method: 'post',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'title=foo&body=bar&userId=1'
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('Request succeeded with JSON response', data);
    })
    .catch((error) => {
        console.log('Request failed', error);
    });