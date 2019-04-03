// вариант с promis

function applyForVisa(document) {
    console.log('Обработка заявления....');
    let promis = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.5 ? resolve({visa: 'Shengen'}) : reject('No enought documents');
        }, 2000);
    });
    return promis;
};

function bookHotel() {};

function buyTickets() {};

applyForVisa({}).
    then(
        function(visa) {
            console.info('Виза получена', visa);
        },
        function(novisa) {
            console.error('В визе отказано', novisa);
        }
);