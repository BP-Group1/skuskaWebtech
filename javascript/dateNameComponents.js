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
document.getElementById("nameDay").innerHTML = searchXML((currentDate.getMonth()+1).toString()+currentDate.getDate().toString(),0,"SK");
//
//console.log(searchXML("0102",3));
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
function searchXML(inp,choice,tag)// choice 1 je dátum 2 je sviatok,3 je meno default je pre meniny na indexe
{
    xmlDoc=loadXMLDoc("../xmlFiles/meniny.xml");
    x=xmlDoc.getElementsByTagName("zaznam");
    input = inp;
    size = input.length;
    startString="";
    if (input === "")
    {
        //nenasiel sa input
        return false;
    }
    for (let i=0;i<x.length;i++)
    {
        if(choice===1 && tag==="SK" ){
            startString = x[i].children[1].textContent;

        }else if(choice===1 && x[i].children.length>3){
            for(let j = 3; j<x[i].children.length;j++){
                if(x[i].children[j].tagName===tag) {
                    startString = x[i].children[j].textContent;
                }
            }
        }
        else{

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
            if(x[i].children[1].tagName===tag){
                SK=x[i].children[1].textContent;

            }else
            {
                divText="nikto";
                if (choice===1){
                    divText=x[i].children[0].textContent;

                }
                else{
                    for(let j = 3; j<x[i].children.length;j++){
                        if(x[i].children[j].tagName===tag) {
                            divText = x[i].children[j].textContent;
                        }
                    }
                }
                console.log(divText)
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
    //console.log(datetime);
}

//menu pomocou komponentu
class sideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- sideBar input -->
            <input type="checkbox" id="check" />
            <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
            </label>
            <!-- sideBar input -->
            <!-- sideBar  -->
    <div class="sidebar">
                <header>Skúška</header>
                <ul>
                    <li>
                        <a href="../html/index.html"><i class="fas fa-link"></i>Domov</a>
                    </li>
                    <li>
                        <a id="gamesDiv" href="#"><i class="fas fa-qrcode"></i>Hry</a>
                        <ul id="games">
                            <li id="lGame">
                                <a href="../html/lukasHTML.html"><i class="fas fa-qrcode"></i>Lukáš hra</a>
                            </li>

                            <li id="pGame">
                                <a href="../html/peterHTML.html"><i class="fas fa-qrcode"></i>Peter hra</a>
                            </li>

                            <li id="eGame">
                                <a href="../html/erikHTML.html"><i class="fas fa-qrcode"></i>Erik hra</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="../html/nameDays.html"><i class="fas fa-calendar-week"></i>Meniny</a>
                    </li>
                    <li>
                        <a href="../html/checklist.html"><i class="fas fa-stream"></i>Práce</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-link"></i>Shortcuts</a>
                    </li>
                    <li>
                        <a href="../html/about.html"><i class="far fa-question-circle"></i>About</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-sliders-h"></i>Services</a>
                    </li>
                    <li>
                        <a href="#"><i class="far fa-envelope"></i>Contact</a>
                    </li>
                </ul>
            </div>
            <!-- sideBar  -->`;
    }
}

if (!customElements.get('side-bar')) {
    customElements.define('side-bar', sideBar);
}
let games=document.getElementById("games");
let gamesDiv = document.getElementById("gamesDiv")
gamesDiv.addEventListener("click",showUnderGames)
function showUnderGames(){
    for (let i=0; i<games.children.length;i++){
        if(games.children[i].style.display===""
            || games.children[i].style.display==="none")
        games.children[i].style.display="block";
        else{
            games.children[i].style.display="none"
        }
    }
}


//storage pocet pristupov na stranky
window.localStorage;
var pocetPristupov = localStorage.getItem('pocet');

if (pocetPristupov === null) {
    pocetPristupov = parseInt(1);
}
else
{
    pocetPristupov = parseInt(pocetPristupov) + parseInt(1);
}


localStorage.setItem("pocet", pocetPristupov);


class pocetNavstev extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>
        Naše stránky si navštívil spolu: ${pocetPristupov}-krát 😃 
           </p> `;
    }

}

if (!customElements.get('pocet-navstev')) {
    customElements.define('pocet-navstev', pocetNavstev);
}



