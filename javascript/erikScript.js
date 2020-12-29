console.log("TEST OK");
var counting = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    start();
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
        stop();
        document.getElementById("timeStiloAssembly").innerText = timeElapsed;
        document.getElementById("congrats").style.display = 'block';
        document.getElementById("stiloAssemblyCounter").style.display = 'none';
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


document.getElementById("eGame").addEventListener('mousemove', function (){
    document.getElementById("stiloImgE").style.display = "block";
});
document.getElementById("eGame").addEventListener('mouseleave', function (){
    document.getElementById("stiloImgE").style.display = "none";
});
document.getElementById("lGame").addEventListener('mousemove', function (){
    document.getElementById("transformersImgE").style.display = "block";
});
document.getElementById("lGame").addEventListener('mouseleave', function (){
    document.getElementById("transformersImgE").style.display = "none";
});
document.getElementById("pGame").addEventListener('mousemove', function (){
    document.getElementById("counterStrikeImgE").style.display = "block";
});
document.getElementById("pGame").addEventListener('mouseleave', function (){
    document.getElementById("counterStrikeImgE").style.display = "none";
});


var timeElapsed = 0;
var timerID = -1;
function tick() {
    timeElapsed++
    document.getElementById("timer").innerHTML = timeElapsed;
}

function start() {
    if(timerID == -1){
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if(timerID != -1){
        clearInterval(timerID)
        timerID = -1
    }
}

document.getElementById("gin").addEventListener('click', function (){
    window.history.go(0);
});
