/*$('#kladivo').draggable({

});*/

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.draggable;
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
