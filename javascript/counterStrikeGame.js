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

        droppable[i].style.width = calculateWidth + 'px';
        droppable[i].style.height = calculateHeight+ 'px';
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
    isPaused=false;
    if(clicked===0){
        setInterval(setTime, 1000);
        clicked=1;
    }
}
function pauseTimer(){
    isPaused=true;
}

function reload(){
    location.reload();
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

