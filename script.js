const gridContainer = document.querySelector("#grid");

function makeGrid(boxSize) {

    let boxSide = 600 / boxSize;

    for (let i = 0; i < boxSize * boxSize; i++)
    {
        let box = document.createElement("div")
        box.classList.add("box")
        box.style.height = boxSide + "px";
        box.style.width = boxSide + "px";
        gridContainer.appendChild(box)
    }
}

gridContainer.onload = makeGrid(16);