function makeCounter(what) {
    function counterPlus() {
      return counterPlus.currentCount++;
    };
    counterPlus.currentCount = 1;

    function counterMinus() {
        return counterMinus.currentCount--;
    };
    counterMinus.currentCount = 1;
  
    return what ? counterPlus : counterMinus;
}
  
  var counter1 = makeCounter(0);
  alert( counter1() ); // 1
  alert( counter1() ); // 2