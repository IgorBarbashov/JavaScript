// https://www.youtube.com/watch?v=SjNmkeUpQAU&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q&index=19&t=0s
// вариант с promis (создание promis)

// откуда следующая функция понимает параметр предфдущей, как и что передается и вызывается внутри?

function applyForVisa(document) {
    console.log('Обработка заявления....');
    let promis = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0 ? resolve({visa: 'Shengen'}) : reject('No enought documents');
        }, 2000);
    });
    return promis;
};

function getVisa(visa) {
    console.info('Виза получена', visa);
    // return visa;
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(visa), 2000);
    });
    // return Promise.resolve(visa);
};

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    // return (visa.hotel = true, visa);
    // return new Promise(function(resolve, reject){
    //     reject('Нет мест');
    // });
    return Promise.reject('Нету мест');
};

function buyTickets(booking) {
    console.log(booking);
    console.log('Покупаем билет');
};

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.log(error));