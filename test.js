function switchIframe(){
    document.getElementById("test").innerHTML = "these words are too long";
    if(document.getElementById("frame").src != "http://127.0.0.1:5500/page2.html"){
        document.getElementById("frame").src = "page2.html";
    }
    else{
        document.getElementById("frame").src = "page1.html";
    }
}

function home(){
    location.href= 'home.html';
}
function projects(){
    location.href= 'projects.html';
}