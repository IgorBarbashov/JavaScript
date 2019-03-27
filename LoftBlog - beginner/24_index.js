(function() {

    var changeColor = function(e) {
        e.preventDefault(e);

        var elem = e.target,
            dataColor = elem.getAttribute("data-color");
        
        if (dataColor) {
            if (e.type === "click") {
                document.body.className = "";
            } else if (e.type === "mouseover") {
                document.body.className = dataColor;
            }
        }
    };

    document.addEventListener("click", changeColor, false);    
    document.addEventListener("mouseover", changeColor, false);    

})();