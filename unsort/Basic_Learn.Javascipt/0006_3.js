var myLogin = prompt ("Введите логин: ","");
if (myLogin === null) {
    alert("Вход отменён");
} else if (myLogin !== "Админ") {
    alert ("Я вас не знаю!");
} else {
    var myPass = prompt ("Введите пароль: ");
    if (myPass === "Чёрный Властелин") {
        alert ("Добро пожаловать");
    } else if (myPass === null) {
        alert ("Вход отменён");
    }
    else {
        alert ("Пароль неверен");
    }
}