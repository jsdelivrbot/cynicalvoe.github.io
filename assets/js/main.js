var title = document.getElementsByTagName("title")[0].textContent.toLowerCase();

if(title==="contact me"){
    cheet("e m a i l", function(){
        var element = document.createElement("p");
        var address = document.createElement("a");
        var ap1 = "bukkit.firebr";
        var ap2 = "eath15@gmail.com";
        element.textContent = "Email: ";
        address.textContent = ap1+ap2;
        address.setAttribute("href", "mailto:"+address.textContent);
        element.appendChild(address);
        document.getElementById("email").appendChild(element);

    });
}

cheet("f i r e", function(){
    document.getElementsByTagName("body")[0].style.animation = "3s fire infinite";
});

cheet("h y l i a n", function(){
    var elements = document.getElementsByTagName("p");
    for(i=0; i<elements.length; i++){
        var attr = elements[i].getAttribute("class");
        elements[i].setAttribute("class", attr += " hylian");
    }
});