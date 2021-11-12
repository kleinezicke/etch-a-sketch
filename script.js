const gridContainer = document.querySelector("#grid");

function makeGrid(boxSize) {

    let boxSide = 600 / boxSize;

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
    }
}

gridContainer.onload = makeGrid(16);

const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener("click", function(e) {

    let boxes = gridContainer.getElementsByClassName("box");

    for (i = 0, l = boxes.length; i < l; i++) {
        
        boxes[i].style.backgroundColor = "white"
    }

})