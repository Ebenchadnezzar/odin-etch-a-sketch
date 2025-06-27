const CONTAINER_WIDTH = 500;


function buildGrid(gridSize) {
    let gridContainer = document.querySelector(".gridContainer");
    let cellSize = CONTAINER_WIDTH / gridSize;
    console.log(cellSize);
    
    let numGridBox = gridSize ** 2;
    for (let i = 0; i < numGridBox; ++i) {
        let gridBox = document.createElement("div");
        gridBox.classList.toggle("gridElement");
        gridBox.style.width = cellSize + "px";
        gridBox.style.height = cellSize + "px";
        gridBox.addEventListener("mouseenter", colorCell);
        
        gridContainer.appendChild(gridBox);
    }
}

function colorCell(e) {
    e.target.style.backgroundColor = "black";
}

buildGrid(32);