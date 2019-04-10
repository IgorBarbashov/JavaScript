// https://coursehunters.net/course/ponyatnyy-javascript-advanced
// https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-advanced-part-1/847
// асинхронный javascipt (сама концепция, Promise, fetch, Async/await)
// Async/await
'use strict';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['bread', 'water', 'oil']);
        }, 2000);
    });
};

const buy = (products) => {
    const msg = `You bought: ${products.length} products.`;
    return Promise.resolve(msg);
}

async function order() {
    let products = await getProducts();
    let orderMessage = await buy(products);

    return orderMessage; // async-функция мой return оборачивает в Promise
};

order()
    .then((response) => {
        console.log(response);
    });