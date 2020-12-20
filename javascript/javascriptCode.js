let currentDate=null;
let hours,minutes,seconds;
let datetime=null;
// date
updateDate()
document.getElementById("time").innerHTML = datetime;

setInterval(function(){
    updateDate();
    document.getElementById("time").innerHTML = datetime;}, 1000);

// xml reading
let xhttp,xmlDoc,x,input,size,SKsviatky,SK,divText,startString;
document.getElementById("nameDay").innerHTML = searchXML((currentDate.getMonth()+1).toString()+currentDate.getDate().toString());
//
console.log(searchXML("0102",3));
function getDate(){
    //input name
    //TODO
}
function getName(){
    //input date
    //TODO
}
function loadXMLDoc(dname)
{

    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.open("GET",dname,false);
    xhttp.send();
    return xhttp.responseXML;
}
function searchXML(inp,choice)// choice 1 je dátum 2 je sviatok,3 je meno default je pre meniny na indexe
{
    xmlDoc=loadXMLDoc("../xmlFiles/meniny.xml");
    x=xmlDoc.getElementsByTagName("zaznam");
    input = inp;
    size = input.length;

    if (input === "")
    {
        //nenasiel sa input
        return false;
    }
    for (let i=0;i<x.length;i++)
    {
        if(choice===1){
            startString = x[i].children[1].textContent;
        }else{
            startString = x[i].children[0].textContent;
        }
        if (startString.toLowerCase() === input.toLowerCase())
        {
            if(x[i].children[1].tagName==="SKsviatky"){SKsviatky = x[i].children[1].textContent;}
            else if(x[i].children[2].tagName==="SKsviatky"){SKsviatky = x[i].children[2].textContent;}
            else if(x[i].children[3].tagName==="SKsviatky"){SKsviatky = x[i].children[3].textContent;}
            else{
                SKsviatky="žiadny";
            }
            if(x[i].children[1].tagName==="SK"){
                SK=x[i].children[1].textContent;
            }else
            {
                divText = "nikto";
                break;
            }
            if(choice===1){
                divText = x[i].children[0].textContent;
            }else if(choice===2){
                divText = SKsviatky;
            }else{
                divText = SK;
            }
            break;
        }
        else
        {
            divText = "nikto";
        }
    }
    if(divText==="nikto"){
        return 'Dnes nemá nikto meniny';
    }else if(choice===1 || choice===2 || choice===3){
        return divText;
    }
    else{
        return 'Meniny má <span class="name">'+divText+'</span>'
    }
}


function updateHours(currentHour){
    if(currentHour.getHours()<10){
        hours="0"+ currentHour.getHours();
    }
    else {
        hours = currentHour.getHours();
    }
}
function updateMin(currentMin){
    if(currentMin.getMinutes()<10){
        minutes="0"+ currentMin.getMinutes();
    }
    else {
        minutes = currentMin.getMinutes();
    }
}

function updateSec(currentSec){
    if(currentSec.getSeconds()<10){
        seconds="0"+ currentSec.getSeconds();
    }
    else {
        seconds = currentSec.getSeconds();
    }
}


function updateDate(){
    currentDate = new Date();

    updateHours(currentDate)
    updateMin(currentDate)
    updateSec(currentDate)

    datetime = currentDate.getDate() + "/"
        + (currentDate.getMonth()+1)  + "/"
        + currentDate.getFullYear() + "  "
        + hours + ":"
        + minutes + ":"
        + seconds;
    console.log(datetime);
}





document.getElementById("eGame").addEventListener('mousemove', function (){
   document.getElementById("stiloImg").style.display = "block";
});
document.getElementById("eGame").addEventListener('mouseleave', function (){
    document.getElementById("stiloImg").style.display = "none";
});
document.getElementById("lGame").addEventListener('mousemove', function (){
    document.getElementById("transformersImg").style.display = "block";
});
document.getElementById("lGame").addEventListener('mouseleave', function (){
    document.getElementById("transformersImg").style.display = "none";
});
document.getElementById("pGame").addEventListener('mousemove', function (){
    document.getElementById("peterRigo").style.display = "block";
});
document.getElementById("pGame").addEventListener('mouseleave', function (){
    document.getElementById("peterRigo").style.display = "none";
});

//kod nacitanie udajov pre profilovky
var totoTrebaZatvorit, aktualneOkno;
var zdroj,nazov,popis;
$.getJSON("../profilovky.json", function (json) {
    console.log(json.profilovky.length);
    for (i=0; i<json.profilovky.length; i++) {
        zdroj = json.profilovky[i].src;
        nazov = json.profilovky[i].title;
        popis = json.profilovky[i].description;
        console.log(zdroj);
        console.log(nazov);
        vytvorObrazok(zdroj,nazov,i,popis);
    }

});


function vytvorObrazok(zdroj,nazov,id, popis) {
    console.log(zdroj);
    console.log(nazov);
    var x = document.createElement("img");
    var y = document.createElement("div");
    var nadpis = document.createElement("b");
    var riadok = document.createElement("br");
    nadpis.append(nazov);
    y.setAttribute("class","col-lg-4 meno");
    x.setAttribute("src", zdroj);
    x.setAttribute("alt", nazov);
    x.setAttribute("class", "profileImage");
    originalOkno(zdroj,nazov,popis)

    x.onclick = function(){

        otvorOkno(nazov);
        totoTrebaZatvorit = nazov;
        aktualneOkno = id;


    };
    document.getElementById("profilovky").appendChild(y).appendChild(nadpis).appendChild(riadok);
    document.getElementById("profilovky").appendChild(y).appendChild(x);

}

function otvorOkno(nazov){
    document.getElementById("okno").style.display="block";
    document.getElementById(nazov).style.display="block";
}
function zatvorOkno(){

    document.getElementById(totoTrebaZatvorit).style.display = "none";
    document.getElementById("okno").style.display = "none";
}



function originalOkno(zdroj,nazov,popis){

    var divko = document.createElement("div");
    var nadpis = document.createElement("h3");
    var obsah = document.createElement("p");
    var original = document.createElement("img");
    divko.setAttribute("id", nazov);
    original.setAttribute("src", zdroj);
    original.setAttribute("alt", nazov);
    original.setAttribute("class", "obrazok");
    nadpis.innerHTML = nazov;
    obsah.innerHTML = popis;
    divko.appendChild(nadpis);
    divko.appendChild(obsah);
    divko.appendChild(original);
    document.getElementById("okno").appendChild(divko);
    document.getElementById(nazov).style.display="none";


}