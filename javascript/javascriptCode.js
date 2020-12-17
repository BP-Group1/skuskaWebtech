let currentdate  = new Date();
let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + "  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
function updateDate(){
    currentdate = new Date();
    var minuty;
    if(currentdate.getMinutes()<10){
        minuty="0"+ currentdate.getMinutes();
    }
    else {
        minuty = currentdate.getMinutes();
    }

    var sekundy;
    if(currentdate.getSeconds()<10){
        sekundy="0"+ currentdate.getSeconds();
    }
    else {
        sekundy = currentdate.getSeconds();
    }

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

