const gridContainer = document.querySelector("#grid");
const resetBtn = document.querySelector("#reset")
const newBtn = document.querySelector("#new");

gridContainer.onload = makeGrid(16);


resetBtn.addEventListener("click", function(e) {

    let boxes = gridContainer.getElementsByClassName("box");

    for (i = 0, l = boxes.length; i < l; i++) {
        
        boxes[i].style.backgroundColor = "white"
    }

})

newBtn.addEventListener("click", function(e) {
    removeGrid();
    makeGrid((prompt("How big should the new grid be?", "16")))
})

function makeGrid(boxSize) {

    let boxSide = 600 / boxSize;

    if (boxSize <= 100 && boxSize > 0) {
        
        for (let i = 0; i < boxSize * boxSize; i++)
        {
            let box = document.createElement("div")
            box.classList.add("box")
            box.style.height = boxSide + "px";
            box.style.width = boxSide + "px";
            box.addEventListener ('mouseover', function(e) {
                box.style.backgroundColor = "black";
            })
            gridContainer.appendChild(box)
        }    }

}

function removeGrid() {

    let boxes = gridContainer.querySelectorAll(".box")
    boxes.forEach(element => {
        gridContainer.removeChild(element)
    });

}