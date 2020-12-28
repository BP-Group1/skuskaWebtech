/*$('#kladivo').draggable({

});*/

function povolPustenie(ev) {

    ev.preventDefault();
}

function zoberObrazok(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function pustiObrazok(ev,id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var kontrolaPozicie = ev.dataTransfer.getData("text") + "OK";
    console.log(kontrolaPozicie);
    console.log(id);
    if (kontrolaPozicie==id){
        ev.target.appendChild(document.getElementById(data));
    }

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