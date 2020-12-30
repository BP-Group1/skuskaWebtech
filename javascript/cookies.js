/**  COOKIES **/
document.cookie;
console.log(document.cookie.toString());
if (document.cookie.toString() == ""){
    var cookiesEnabled = false;
    document.cookie = cookiesEnabled;
}


console.log(document.cookie);
$(document).ready(function (){
    checkCookies();
});

document.getElementById("enableCookies").addEventListener('click', function (){
    cookiesEnabled = true;
    document.cookie.slice(0)
    document.cookie = cookiesEnabled;
    checkCookies();
});
document.getElementById("disableCookies").addEventListener('click', function (){
    cookiesEnabled = false;
    document.cookie.slice(0)
    document.cookie = cookiesEnabled;
    checkCookies();
});

function checkCookies(){
    console.log("checkCookies");
    if(document.cookie.toString() === "true"){
        document.cookie.slice(0)
        document.getElementById("cookiesDiv").style.display = "none";
        console.log(document.cookie + " nemali by byt");
        document.cookie = cookiesEnabled;
    }
    if(document.cookie.toString() === "false"){
        document.cookie.slice(0)
        document.getElementById("cookiesDiv").style.display = "block";
        console.log(document.cookie + " mali by byt");
        document.cookie = cookiesEnabled;
    }
}

/* COOKIES */