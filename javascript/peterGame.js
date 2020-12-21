//takto

$( function() {
    $( ".parts").draggable();
    $( "#picture" ).droppable();
} );
let maxWidth=1186,maxHeight=672,actualWidth,actualHeight,calculateWidth,calculateHeight;
let picture = document.getElementById("picture");
let parts = document.getElementsByClassName("parts");
actualHeight=picture.clientHeight;
actualWidth=picture.clientWidth;
resizeImages();
$(window).resize(function (){
    console.log("width:"+picture.clientWidth);
    console.log("height:"+picture.clientHeight);
    actualHeight=picture.clientHeight;
    actualWidth=picture.clientWidth;
    resizeImages();

})
function resizeImages(){
    for(let i=0;i<parts.length;i++){
        calculateHeight=(actualHeight/maxHeight);
        calculateWidth=(actualWidth/maxWidth);
        calculateWidth=parts[i].naturalWidth*calculateWidth;
        calculateHeight=parts[i].naturalHeight*calculateHeight;

        parts[i].style.width=calculateWidth+'px';
        parts[i].style.height=calculateHeight+'px';
    }
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