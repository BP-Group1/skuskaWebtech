console.log("TEST OK");

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop trough empties and call events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart(){
    console.log("start");
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    console.log("end");
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
    this.className += ' hovered';
    console.log('over');
}

function dragEnter(e){
    e.preventDefault();
    console.log('enter');
}

function dragLeave(){
    this.className = 'empty';
    console.log('leave');
}

function dragDrop(){
    this.className = 'empty';
    this.appendChild(fill);
    console.log('drop');
}