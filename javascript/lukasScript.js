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
