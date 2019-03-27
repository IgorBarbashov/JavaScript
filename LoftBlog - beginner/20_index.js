(function() {

    // var el = document.getElementById("box");
    // el.onclick = function() {
    //     this.style.backgroundColor = "red";
    // };

    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            if (this.id === "day") {
                document.body.className = "day";
            } else if (this.id === "night") {
                document.body.className = "night";
            }
        };  
    };



})();