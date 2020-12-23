console.log("TEST OK");
var counting = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, id) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var currentPosition = obj_transform(data);


    if(isComponentFit(id, data) === true){
        ev.target.appendChild(document.getElementById(data));
        changeStyle(currentPosition);
        counting++;
    }

    if(counting === 9){
        document.getElementById("congrats").style.display = 'block';
    }
}

function obj_transform(string){
    return "position" + string.slice(6);
}

function changeStyle(elementID){
    var newStyle = document.getElementById(elementID).style;
    newStyle.opacity = '100%';
}

function isComponentFit(position, component){
    var sPosition = position.slice(8);
    var sComponent = component.slice(6);

    return sPosition === sComponent;
}
