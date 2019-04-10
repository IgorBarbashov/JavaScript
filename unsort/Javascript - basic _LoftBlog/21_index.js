(function() {

    var buttons = document.getElementsByTagName("button");

    var changeColor = function() {
        if (this.id === "day") {
            document.body.className = "day";
        } else if (this.id === "night") {
            document.body.className = "night";
        }
    };

    var sayHi = function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.currentTarget);
    };

    var html = document.getElementsByTagName("html")[0];
    html.addEventListener("click", sayHi, false);

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", sayHi, false);
        buttons[i].addEventListener("click", changeColor, false);

        // buttons[i].removeEventListener("click", sayHi, false);
        

    };



})();