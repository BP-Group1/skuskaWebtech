let currentdate  = new Date();
let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + "  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
function updateDate(){
    currentdate = new Date();
    datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + "  "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
}
console.log(datetime);

setInterval(function(){
    updateDate();
    console.log(datetime);
    document.getElementById("time").innerHTML = datetime;}, 1000);

