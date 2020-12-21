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
    var data1 = ev.dataTransfer.getData("text") + "OK";
    console.log(data1);
    console.log(id);
    if (data1==id){
        ev.target.appendChild(document.getElementById(data));
    }

}