function makeArmy() {
    var shooters = [];
      
    
    for (var i = 0; i < 10; i++) {
        var shooter = function () { // функция-стрелок
            alert( shooter.i ); // выводит свой номер
        };
        shooter.i = i;

        shooters.push(shooter);
    }
  
    return shooters;
}
  
  var army = makeArmy();
  
  for (var i = 9; i >= 0; i--) {
    i + " : " + army[i]();
  }
  