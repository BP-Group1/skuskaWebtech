/*$('#kladivo').draggable({

});*/

var pustiCas = 0;
var spravnePolozene = 0;
var spustene;
var casDisplay
function povolPustenie(ev) {

    ev.preventDefault();
}

function zoberObrazok(event) {
    event.dataTransfer.setData("text", event.target.id);
    if (pustiCas == 0){
        pocitajCas();
    }
}

function pustiObrazok(ev,id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var kontrolaPozicie = ev.dataTransfer.getData("text") + "OK";
    console.log(kontrolaPozicie);
    console.log(id);
    if (kontrolaPozicie==id){
        ev.target.appendChild(document.getElementById(data));
        spravnePolozene = spravnePolozene + 1;
    }

    if(spravnePolozene == 10)
    {
        clearTimeout(spustene);
        gratulacia();
    }

}

var sekundy = 0;
var minuty = 0;

function cas() {
    sekundy = sekundy + 1;
    if (sekundy >= 60){
        sekundy = 0;
        minuty = minuty + 1;
    }

    zobrazCas(sekundy,minuty);

}

function zobrazCas(sekundy, minuty){
    if (sekundy<10)
    {
        sekundy="0" + sekundy;
    }

    if (minuty<10)
    {
        minuty="0" + minuty;
    }
    casDisplay = "00:" + minuty + ":" + sekundy;
    document.getElementById("cas").innerText = casDisplay;
}

function pocitajCas(){
    pustiCas = 1;
    cas();
    spustene = setTimeout('pocitajCas();',1000)
}

function gratulacia(){
    document.getElementById("div1").style.display = "none"
    document.getElementById("cas").style.display = "none"
    document.getElementById("div2").style.display = "block"
    document.getElementById("vyslednyCas").innerText = casDisplay;
}


document.getElementById("eGame").addEventListener('mousemove', function (){
    document.getElementById("stiloImgL").style.display = "block";
});
document.getElementById("eGame").addEventListener('mouseleave', function (){
    document.getElementById("stiloImgL").style.display = "none";
});
document.getElementById("lGame").addEventListener('mousemove', function (){
    document.getElementById("transformersImgL").style.display = "block";
});
document.getElementById("lGame").addEventListener('mouseleave', function (){
    document.getElementById("transformersImgL").style.display = "none";
});
document.getElementById("pGame").addEventListener('mousemove', function (){
    document.getElementById("counterStrikeImgL").style.display = "block";
});
document.getElementById("pGame").addEventListener('mouseleave', function (){
    document.getElementById("counterStrikeImgL").style.display = "none";
});
