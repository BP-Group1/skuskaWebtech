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
