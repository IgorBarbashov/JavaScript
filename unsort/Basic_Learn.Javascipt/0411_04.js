function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate( date.getDate() - days);
    return dateCopy.getDate();
}

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
