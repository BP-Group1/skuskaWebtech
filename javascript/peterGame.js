//takto
let draggableOptions = {
    cancel: "a.ui-icon",
    revert: true,
    helper: "clone",
    cursor: "move",
    revertDuration: 0
}
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
            if(allDropsCorrect()===true){

            }
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
resizeImages();
$(window).resize(function (){
    actualHeight=picture.clientHeight;
    actualWidth=picture.clientWidth;
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
    }
}
function resizeImages(){
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

//alebo
/*
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.wrapper');
    const drag = document.querySelector('.parts');
    const start = document.querySelector('.parts');

    drag.style.top = '10vh';
    drag.style.left = '10vw';

    let offsetTouchX = null;
    let offsetTouchY = null;

   // const sayStart = new Audio('./play.mp3');
   // const sayStop = new Audio('./stop.mp3');
    //let sayNo = new Audio(`./1.mp3`);
    //sayNo.volume = 0.1;

    // ------------------------ listeners
    start.addEventListener('touchstart', () => {
        start.style.opacity = 0;
        start.style.zIndex = -1;
        drag.style.opacity = 1;
    });

    drag.addEventListener('touchstart', touchStart);
    drag.addEventListener('touchmove', touchMove);
    drag.addEventListener('touchend', touchEnd);

    // ------------------------ touchStart
    function touchStart(event) {
        console.log("start")
        event.preventDefault();

        const touch = event.targetTouches[0];
        offsetTouchX = touch.pageX - drag.getBoundingClientRect().left;
        offsetTouchY = touch.pageY - drag.getBoundingClientRect().top;

        drag.style.backgroundPosition = `-100px 0`;
        drag.style.boxShadow = `5px 5px 10px gray`;

        //sayStart.play();
    }

    // ------------------------ touchMove
    function touchMove(event) {
        event.preventDefault();
        console.log("move")
        const touch = event.targetTouches[0];
        drag.style.top = `${touch.pageY - (wrapper.offsetTop) - (offsetTouchY)}px`;
        drag.style.left = `${touch.pageX - (wrapper.offsetLeft) - (offsetTouchX)}px`;
        drag.style.backgroundPosition = `-100px 0`;

        if (drag.getBoundingClientRect().top <= wrapper.getBoundingClientRect().top) {
            drag.style.top = `${0}px`;
            drag.style.backgroundPosition = `-202px -3px`;
           // sayNo.play();
        }
        if (drag.getBoundingClientRect().right >= wrapper.getBoundingClientRect().right) {
            drag.style.right = `${0}px`;
            drag.style.left = ``;
            drag.style.backgroundPosition = `-202px -3px`;
          //  sayNo.play();
        }
        if (drag.getBoundingClientRect().bottom >= wrapper.getBoundingClientRect().bottom) {
            drag.style.top = ``;
            drag.style.bottom = `${0}px`;
            drag.style.backgroundPosition = `-202px -3px`;
         //   sayNo.play();
        }
        if (drag.getBoundingClientRect().left <= wrapper.getBoundingClientRect().left) {
            drag.style.left = `${0}px`;
        //    sayNo.play();
            drag.style.backgroundPosition = `-202px -3px`;
        }
    }

    function touchEnd() {
        console.log("end")
        drag.style.backgroundPosition = `0 0`;
        drag.style.boxShadow = `0 0 0 black`;
      //  sayStop.play();
    }
});
*/

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
