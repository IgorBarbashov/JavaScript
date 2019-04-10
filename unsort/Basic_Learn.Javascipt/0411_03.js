function getLocalDay(date) {
    var day = date.getDay();
    return day ? day : day + 7;
}

var date = new Date(2012, 0, 9);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
