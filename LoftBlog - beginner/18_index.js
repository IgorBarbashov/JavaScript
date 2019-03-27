(function() {

    var div = document.getElementById("test"),
        style = div.style;

    div.classList.add("css-class");
    div.classList.add("css-class-new");
    div.classList.remove("css-class");
    div.classList.toggle("css-class");

    // div.className = " css-class  css-class-new ";
    // div.className = div.className.replace(" css-class ", "");
    // div.className = "";
    
    // style.color = "red";
    // style.backgroundColor = "blue";
    // style.border = "1px black solid";
    // style.padding = "10px";



    console.log(div);

})();