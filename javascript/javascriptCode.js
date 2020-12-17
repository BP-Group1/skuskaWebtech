let currentdate  = new Date();
let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + "  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

var minuty;
function upravaMin(currentMin){

    minuty;
    if(currentMin.getMinutes()<10){
        minuty="0"+ currentMin.getMinutes();
    }
    else {
        minuty = currentMin.getMinutes();
    }
}

var sekundy;
function upravaSec(currentSec){

    sekundy;
    if(currentSec.getSeconds()<10){
        sekundy="0"+ currentSec.getSeconds();
    }
    else {
        sekundy = currentSec.getSeconds();
    }
}


function updateDate(){
    currentdate = new Date();

    upravaMin(currentdate)
    upravaSec(currentdate)

    datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + "  "
        + currentdate.getHours() + ":"
        + minuty + ":"
        + sekundy;
}
console.log(datetime);

setInterval(function(){
    updateDate();
    console.log(datetime);
    document.getElementById("time").innerHTML = datetime;}, 1000);

