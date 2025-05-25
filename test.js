function switchIframe(){
    if(document.getElementById("frame").src == "page2.html"){
        document.getElementById("frame").src = "new.html";
    }
    else{
        document.getElementById("frame").src = "page2.html";
    }
}