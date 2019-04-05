function getWeekDay(date) {
    var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    var dayOfWeek = date.getDay();
    return days[dayOfWeek];
}

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
