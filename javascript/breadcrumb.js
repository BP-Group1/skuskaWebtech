window.localStorage;
console.log(document.title)
var pole=[];
if (localStorage.getItem('poleStranok') != undefined){
var slovo = localStorage.getItem('poleStranok');
console.log(slovo.toString());
//pole.push(slovo);
var slovicko="";
for (let i = 0; i<slovo.length;i++){
    console.log(slovo[i]);
    if (slovo[i]===","){
        pole.push(slovicko);
        console.log("mam");
        console.log(slovicko)
        slovicko="";
    }
    else {
        slovicko = slovicko + slovo[i];
    }

}
pole.push(slovicko);
}
pole.push(document.title);
console.log(pole);

localStorage.setItem("poleStranok", pole);
$(document).ready(function (){

    console.log(pole.length);
    //vytvorenie retazca
    let y = document.createElement("ol");
    y.setAttribute("class","breadcrumb");

   // pridavanie stranok
    for(var i=0; i<=pole.length;i++){
        let z = document.createElement("li");
        z.setAttribute("class","breadcrumb-item");

        var stranka = pridanieStranky(pole[i]);
        /*let stranka = document.createElement("a");
        stranka.setAttribute("href",pole[i]);
        stranka.innerText=pole[i];*/

        y.appendChild(z).appendChild(stranka);
    }



    document.getElementById("historia").appendChild(y);


});

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
    else if (titul === "Petrove HTML"){
        novaStranka.setAttribute("href","../html/peterHTML.html");
    }
    else if (titul === "name days"){
        novaStranka.setAttribute("href","../html/nameDays.html");
    }
    else if (titul === "O nás"){
        novaStranka.setAttribute("href","../html/about.html");
    }
    else if (titul === "Checklist"){
        novaStranka.setAttribute("href","../html/checklist.html");
    }
    else
    novaStranka.setAttribute("href","http://147.175.121.202/~xpribulal/pribulikZ7");
    novaStranka.innerText=titul;

    /*
    switch(titul){
    case "Skuska Webtech":
        novaStranka.setAttribute("href","../html/index.html"); brake;
    case "Lukasove HTML":
        novaStranka.setAttribute("href","../html/lukasHTML.html"); brake;
    case "Erik's HTML":
        novaStranka.setAttribute("href","../html/erikHTML.htm"); brake;
    case "Petrove HTML":
        novaStranka.setAttribute("href","../html/peterHTML.html"); brake;
    case "name days":
        novaStranka.setAttribute("href","../html/nameDays.html"); brake;
    case "O nás":
        novaStranka.setAttribute("href","../html/about.html"); brake;
    case "Chcecklist":
        novaStranka.setAttribute("href","../html/checklist.html"); brake;
    }
    */

    return novaStranka;
}