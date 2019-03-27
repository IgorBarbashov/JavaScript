(function() {
    var elem = document.createElement("p"),
        content = document.createTextNode("Dynamic text"),
        wrappedP = document.getElementById("wrapped");

    elem.innerHTML ="<strong>Dynaminc</strong>";

    wrappedP.parentNode.removeChild(wrappedP);

    elem.appendChild(content);
    elem.setAttribute("id", "mrDynamic");
    elem.id = "mrDynamic";

    wrappedP.parentNode.appendChild(elem);
    wrappedP.parentNode.insertBefore(elem, wrappedP);
    wrappedP.parentNode.replaceChild(elem, wrappedP);


    console.log(wrappedP);

})();