const CONTAINER_WIDTH = 500;

function onStart() {
    buildGrid(32);

    // Setup the resize button
    let resizeButton = document.querySelector(".resizeButton");
    resizeButton.addEventListener("click", () => {
        // Clear old grid
        let gridContainer = document.querySelector(".gridContainer");
        gridContainer.innerHTML = '';

        // Build new grid
        buildGrid(prompt("New Canvas Size:", 32));
    })
}

function buildGrid(gridSize) {
    // Handle null value
    gridSize = gridSize || 32;  // (|| chooses first truthy value)
    gridSize = Math.min(Math.max(gridSize, 1), 100);

    let gridContainer = document.querySelector(".gridContainer");
    let cellSize = CONTAINER_WIDTH / gridSize;
    console.log("cell size: " + cellSize + "\ngridSize: " + gridSize);
    
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
    let oldCol = e.target.style.backgroundColor;

    if (!oldCol) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        e.target.style.opacity = 1;
    }
    else {
        e.target.style.opacity -= 0.1;
    }
}

onStart();