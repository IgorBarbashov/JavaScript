// вариант с callback

function applyForVisa(document, getVisa, didntGetVisa) {
    console.log('Обработка заявления....');
    setTimeout(function() {
        Math.random() > 0.5 ? getVisa({visa: 'Shengen'}) : didntGetVisa('No enought documents');
    }, 2000);
};

function bookHotel(visa, booked, nobooked) {
    console.log('Заказываем отель...');
    setTimeout(function() {
        Math.random() > 0.5 ? (visa.hotle=true, booked(visa)) : nobooked('Да тут и так куча туристов');
    }, 1000);
};

function buyTickets(visa, bought, nobougth) {
    console.log('Покупаем билеты...');
    setTimeout(function() {
        Math.random() > 0.5 ? (visa.ticket=true,  bought(visa)) : nobougth('Все полеты отменили');
    }, 1000);
};

applyForVisa(
    {},
    function(visa) {
        console.info('Виза получена', visa);
        bookHotel(visa, function(visa) {
            console.info('Отель забронирован', visa);
            buyTickets(visa, function(visa) {
                console.log('Все оформили!!!', visa);
            }, function(nobought) {
                console.error('Не смогли купить билеты', nobought);
            });
        }, function(nobooked) {
            console.error('Отель не забронировали', nobooked);
        });
    }, function(novisa) {
        console.error('В визе отказано', novisa);
    }
);