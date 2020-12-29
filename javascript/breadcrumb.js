
console.log(document.title)
var pole=[];
pole.push(document.title);
console.log(pole);

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
    if (titul == "Skuska Webtech"){
        novaStranka.setAttribute("href","../html/index.html");
    }
    else if (titul == "Lukasove HTML" ){
        novaStranka.setAttribute("href","../lukasHTML.html");

    }
    else
    novaStranka.setAttribute("href","http://147.175.121.202/~xpribulal/pribulikZ7");
    novaStranka.innerText=titul;

    return novaStranka;
}