function getSecondsToday() {
    var nowDate = new Date();
    var beginDate = new Date(nowDate);
    beginDate.setHours(0, 0, 0, 0);
    
    var res = Math.round( (nowDate - beginDate) / 1000 );

    return res;
}

alert ( getSecondsToday() );