// https://coursehunters.net/course/kompleksnoe-obuchenie-javascript
// Урок 14. Практика: async (с 37 минуты)
// при использовании async:
// - внутри async там где есть await - работает синхронно
// - вне async - работает асинхронно
'use strict';

function delay(ms, num) {
    return new Promise(resolve => {
        setTimeout(num => {
            console.log(""+num + ' - внутри промис');
            resolve();
        }, ms, num);
    });
};

(async () => {
    console.log('перед1');
    await delay(1000, '1-1'); // await ожидает Promise, но возвращает его значение
    console.log('разрешенный промис1');
    await delay(100, '1-2');
    console.log('после1');
})();

(async () => {
    console.log('перед2');
    await delay(2000, '2-1');
    console.log('разрешенный промис2');
    await delay(2000, '2-2');
    console.log('после2');
})();

(async () => {
    try {                    // при использовании async/await
        console.log('перед3');
        await delay(100, '3-1');
        console.log('разрешенный промис3');
        await delay(2000, '3-2');
        console.log('после3');
    } catch (e) {           // ошибки обрабатываются при помощи try-catch
        console.error('ОШИБКА!');
    }
})();