var draggies = [];

var draggableElems = document.querySelectorAll('.draggable');
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);

    draggie.on('dragStart', function () {
        console.log('dragStart');
        let element = this.element;
        element.classList.add('drag-Start');
        element.classList.remove('drag-End');
    });

    draggie.on('dragEnd', function () {
        console.log('dragEnd');
        let element = this.element;
        element.classList.remove('drag-Start');
        element.classList.add('drag-End');
    });
}

var draggableElemsPuzzle = document.querySelectorAll('.draggablePuzzle');
for (var i = 0; i < draggableElemsPuzzle.length; i++) {
    var draggableElem = draggableElemsPuzzle[i];
    var draggie = new Draggabilly(draggableElem, {
        grid: [180, 178],
        containment: '.boxPuzzle'
    });
    draggies.push(draggie);
}
