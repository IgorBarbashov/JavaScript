// https://coursehunters.net/course/ponyatnyy-javascript-advanced
// https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-advanced-part-1/847
// асинхронный javascipt (сама концепция, Promise, fetch, Async/await)
// Promise
// 
// ? - в другизх лекциях где-то говорилось, что в then-chainig нам над тоже возвращать Promise
// как оказалось это не обязательно - в каких случаях это надо делать?
// предположенние: это нужно, чтобы можно было использовать тот же блок catch, что и в родительском Promise
'use strict';

const flag = true;

const myPromise = new Promise(
    function(resolve, reject) {
        if (flag) {
            resolve('Ok');
        } else {
            reject('Fail');
        }
    }
);

function myResolve1(data) {
    console.log('from myResolve1', data);
    return 'Пошли дальше';
};
function myResolve2(data) {
    console.log('from myResolve2', data);
};
function myFail(error) {
    console.log(error);
};

myPromise
    .then(myResolve1)
    .then(myResolve2)
    .catch(myFail);

// https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-advanced-part-1/847
// практический пример c XMLHttpRequest
const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';

function getServerData(url) {
    const makeRequest = new Promise(
        function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject('Error');
                }
            };

            xhr.send();
        }
    );
    return makeRequest;
};

getServerData(url)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });