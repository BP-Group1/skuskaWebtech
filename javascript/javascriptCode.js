let currentdate=null;
let hodiny,minuty,sekundy;
let datetime=null;
// date
updateDate()
document.getElementById("time").innerHTML = datetime;

setInterval(function(){
    updateDate();
    document.getElementById("time").innerHTML = datetime;}, 1000);

// xml reading
let xhttp,xmlDoc,x,input,size,SKsviatky,SK,divText,startString;
searchXML((currentdate.getMonth()+1).toString()+currentdate.getDate().toString());
//

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
function searchXML(date)
{
    xmlDoc=loadXMLDoc("../xmlFiles/meniny.xml");
    x=xmlDoc.getElementsByTagName("zaznam");
    input = date;
    size = input.length;

    if (input === "")
    {
        //nenasiel sa input
        return false;
    }
    for (let i=0;i<x.length;i++)
    {
        startString = x[i].children[0].textContent;

        if (startString.toLowerCase() === input.toLowerCase())
        {
            if(x[i].children[1].tagName==="SKsviatky"){SKsviatky = x[i].children[1].textContent;}
            else if(x[i].children[2].tagName==="SKsviatky"){SKsviatky = x[i].children[2].textContent;}
            else if(x[i].children[3].tagName==="SKsviatky"){SKsviatky = x[i].children[3].textContent;}
            if(x[i].children[1].tagName==="SK"){
                SK=x[i].children[1].textContent;
            }else
            {
                divText = "nikto";
                break;
            }
            divText = SK;
            break;
        }
        else
        {
            divText = "nikto";
        }
    }
    if(divText==="nikto"){
        document.getElementById("nameDay").innerHTML = 'Dnes nemá nikto meniny';
    }else{
        document.getElementById("nameDay").innerHTML = 'Meniny má <span class="name">'+divText+'</span>';
    }

}


function upravaHod(currentHour){
    if(currentHour.getHours()<10){
        hodiny="0"+ currentHour.getHours();
    }
    else {
        hodiny = currentHour.getHours();
    }
}
function upravaMin(currentMin){
    if(currentMin.getMinutes()<10){
        minuty="0"+ currentMin.getMinutes();
    }
    else {
        minuty = currentMin.getMinutes();
    }
}

function upravaSec(currentSec){
    if(currentSec.getSeconds()<10){
        sekundy="0"+ currentSec.getSeconds();
    }
    else {
        sekundy = currentSec.getSeconds();
    }
}


function updateDate(){
    currentdate = new Date();

    upravaHod(currentdate)
    upravaMin(currentdate)
    upravaSec(currentdate)

    datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + "  "
        + hodiny + ":"
        + minuty + ":"
        + sekundy;
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
