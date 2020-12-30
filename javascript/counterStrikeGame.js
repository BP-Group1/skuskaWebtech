let sounds = [];
let ak47 = document.createElement('audio');
let awp = document.createElement('audio');
let bombPlanted = document.createElement('audio');
let bombDefused = document.createElement('audio');
let desertEagle = document.createElement('audio');
let famas = document.createElement('audio');
let grenadeOut = document.createElement('audio');
let p90 = document.createElement('audio');
let planting = document.createElement('audio');
let roundDraw = document.createElement('audio');
let throwingFire = document.createElement('audio');
let throwingFlash = document.createElement('audio');
let wonRound = document.createElement('audio');
let knifeStab = document.createElement('audio');
let backgroundMusic =document.createElement('audio');
sounds.push(ak47,awp,bombPlanted,bombDefused,desertEagle,famas,grenadeOut,p90,planting,roundDraw,throwingFlash,throwingFire,wonRound,knifeStab,backgroundMusic);
for (let i =0;i<sounds.length;i++){
    sounds[i].controls=true;
}
ak47.src = '../sounds/Ak47 shoot CSGO Sound Effect.mp3';
awp.src ='../sounds/AWP Zoom Sound Effect [CSGO].mp3';
bombPlanted.src ='../sounds/Bomb Has Been Planted - Sound Effect CSGO.mp3';
bombDefused.src ='../sounds/Bomb has been defused - CSGO Sound Effect.mp3';
desertEagle.src ='../sounds/Desert Eagle Shoot Sound Effect CSGO.mp3';
famas.src ='../sounds/Famas Sound Effect CSGO (shoot).mp3';
grenadeOut.src ='../sounds/Grenade Out! Sound Effect [CSGO].mp3';
p90.src ='../sounds/P90 Shooting Sound Effect CSGO.mp3';
planting.src ='../sounds/Planting C4 Bomb Sound Effect CSGO.mp3';
roundDraw.src ='../sounds/Round Draw - CSGO Sound Effect.mp3';
throwingFire.src ='../sounds/Throwing Fire grenade Sound Effect [CSGO].mp3';
throwingFlash.src ='../sounds/Throwing Flashbang Sound Effect [CSGO].mp3';
wonRound.src ='../sounds/Won Round CSGO Sound Effect.mp3';
knifeStab.src ='../sounds/knife slash sound effect.mp3'
backgroundMusic.src='../sounds/Sneaky Snitch (Kevin MacLeod) - Gaming Background Music (HD).mp3';
let clicked=0;
$( function() {
    $( ".parts").draggable({
        drag: function (){
            startTimer();
        },
        containment: "#picture",
        helper: "clone",
        cursor: "move",
        cancel: "a.ui-icon",
        revert: "invalid",});
    $( ".droppable" ).droppable({
        drop: function( event, ui ) {
            if(isDropOk(event,ui)===true){
                $( this )
                    .addClass( getClassName(this) )
                    .find( "img" )
                    .html( "Dropped!" );
            }
            allDropsCorrect();
        }
    });
} );

function isDropOk(event,ui){
    let a = event.target.id;
    a=a.split("D");
    a=a[0];
    let b = ui.draggable[0].id;
    if(a===b){
        document.getElementById(b).style.display="none";
        if(b==="bomb"){
            bombPlanted.play();
        }
        if(b==="ctPanak"){
            bombDefused.play();
        }
        if(b==="hlava1"){
            throwingFlash.play();
        }
        if(b==="hlava2"){
            planting.play();
        }
        if(b==="lampa"){
            roundDraw.play();
        }
        if(b==="nozik"){
            knifeStab.play();
        }
        if(b==="okulare"){
            grenadeOut.play();
        }
        if(b==="sipka"){
            roundDraw.play();
        }
        if(b==="zbran"){
            desertEagle.play();
        }
        if(b==="zbran2"){
            ak47.play();
        }
        if(b==="rusko"){
            throwingFire.play();
        }
    }
    return a === b;

}
function getClassName(name){
    let id = name.id;
    id=id.split("D");

    return id[0]+"Correct";
}
let maxWidth=1186,maxHeight=672,actualWidth,actualHeight,calculateWidth,calculateHeight;
let picture = document.getElementById("picture");
let parts = document.getElementsByClassName("parts");
let droppable=document.getElementsByClassName("droppable");
actualHeight=picture.clientHeight;
actualWidth=picture.clientWidth;

$(window).resize(function (){
    resizeImages();
})

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let isPaused;
function allDropsCorrect(){
    let count=0;
    for (let i = 0;i<droppable.length;i++){
        if(droppable[i].className.includes("Correct")){
            count++;
        }
    }
    if(count===11){
        wonRound.play();
        isPaused=true;
        $('#picture').append("<p class='result'>Víťazstvo, gratulujeme! <br> zvládli ste to za tento čas : "+pad(parseInt(totalSeconds / 60)+":"+pad(totalSeconds % 60)+"</p>"));
        document.getElementById("parts").style.display="none";
    }
}
function resizeImages(){
    actualHeight=picture.clientHeight;
    actualWidth=picture.clientWidth;

    for(let i=0;i<parts.length;i++){
        calculateHeight=(actualHeight/maxHeight);
        calculateWidth=(actualWidth/maxWidth);


        calculateWidth=parts[i].naturalWidth*calculateWidth;
        calculateHeight=parts[i].naturalHeight*calculateHeight;


        parts[i].style.width=calculateWidth+'px';
        parts[i].style.height=calculateHeight+'px';
        if(i<parts.length-1) {
            droppable[i].style.width = calculateWidth + 'px';
            droppable[i].style.height = calculateHeight + 'px';
        }
    }
}
function setTime() {
    if(!isPaused) {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
function startTimer(){
    backgroundMusic.play();
    isPaused=false;
    if(clicked===0){
        setInterval(setTime, 1000);
        clicked=1;
    }
}
function pauseTimer(){
    backgroundMusic.pause();
    isPaused=true;
}

function reload(){
    location.reload();
}
let isAnimating;
function illustration(){
    if(!isAnimating) {
        for (let j = 0; j < parts.length - 1; j++) {
            parts[j].classList.add(parts[j].id)
        }
        isAnimating=true;
    }else{
        for (let j = 0; j < parts.length - 1; j++) {
            parts[j].classList.remove(parts[j].id)
        }
        isAnimating=false;
    }

}

document.getElementById("eGame").addEventListener('mousemove', function (){
    document.getElementById("stiloImgP").style.display = "block";
});
document.getElementById("eGame").addEventListener('mouseleave', function (){
    document.getElementById("stiloImgP").style.display = "none";
});
document.getElementById("lGame").addEventListener('mousemove', function (){
    document.getElementById("transformersImgP").style.display = "block";
});
document.getElementById("lGame").addEventListener('mouseleave', function (){
    document.getElementById("transformersImgP").style.display = "none";
});
document.getElementById("pGame").addEventListener('mousemove', function (){
    document.getElementById("counterStrikeImgP").style.display = "block";
});
document.getElementById("pGame").addEventListener('mouseleave', function (){
    document.getElementById("counterStrikeImgP").style.display = "none";
});
function changeVolume(){
    let number = document.getElementById("volume").value;
    for (let i =0;i<sounds.length;i++){
        sounds[i].volume=number;
    }
    if(number===0){
        backgroundMusic.pause();

    }else{
        backgroundMusic.volume=0.1;
        backgroundMusic.play();
    }
}
changeVolume(0.5);




