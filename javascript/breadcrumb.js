window.localStorage;
//console.log(document.title)
var pole=[];
if (localStorage.getItem('poleStranok') != undefined){
var slovo = localStorage.getItem('poleStranok');
//console.log(slovo.toString());
//pole.push(slovo);
var slovicko="";
for (let i = 0; i<slovo.length;i++){
    //console.log(slovo[i]);
    if (slovo[i]===","){
        pole.push(slovicko);
       // console.log("mam");
       // console.log(slovicko)
        slovicko="";
    }
    else {
        slovicko = slovicko + slovo[i];
    }

}
pole.push(slovicko);
}
pole.push(document.title);
//console.log(pole);

localStorage.setItem("poleStranok", pole);
$(document).ready(function (){

    //console.log(pole.length);
    //vytvorenie retazca
    let y = document.createElement("ol");
    y.setAttribute("class","breadcrumb");


    var pocet = pocetStranok(pole.length);

   // pridavanie stranok
    for(pocet; pocet<pole.length;pocet++){
        let z = document.createElement("li");
        z.setAttribute("class","breadcrumb-item");

        var stranka = pridanieStranky(pole[pocet]);
        /*let stranka = document.createElement("a");
        stranka.setAttribute("href",pole[i]);
        stranka.innerText=pole[i];*/

        y.appendChild(z).appendChild(stranka);
    }

    document.getElementById("historia").appendChild(y);
});

function pocetStranok(dlzka){
    var vypocet = 0;
    if (dlzka>5){
        vypocet = dlzka - 5;
    }

    return vypocet;
}

function pridanieStranky(titul) {

    let novaStranka = document.createElement("a");

    if (titul === "Skuska Webtech"){
        novaStranka.setAttribute("href","../html/index.html");
    }
    else if (titul === "Lukasove HTML" ){
        novaStranka.setAttribute("href","../html/lukasHTML.html");
    }
    else if (titul === "Erik's HTML"){
        novaStranka.setAttribute("href","../html/erikHTML.html");
    }
    else if (titul === "Counter Strike"){
        novaStranka.setAttribute("href","../html/counterStrikeGame.html");
    }
    else if (titul === "Meniny"){
        novaStranka.setAttribute("href","../html/nameDays.html");
    }
    else if (titul === "O nás"){
        novaStranka.setAttribute("href","../html/about.html");
    }
    else if (titul === "Checklist"){
        novaStranka.setAttribute("href","../html/checklist.html");
    }
    else
    novaStranka.setAttribute("href","https://www.fei.stuba.sk/");
    novaStranka.innerText=titul;


    return novaStranka;
}
