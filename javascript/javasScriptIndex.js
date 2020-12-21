//vytvoreny kvoli errorom na nasich strankach
//lebo sa tam nepouzivaju funkcie co su v indexe a blbne to potom

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
    x.setAttribute("class", "col-12 profileImage");
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