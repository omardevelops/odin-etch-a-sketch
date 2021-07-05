const grid_container = document.querySelector('#grid_container');
console.log(grid_container);

function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const newDiv = document.createElement('div');
            grid_container.appendChild(newDiv);
        }
    }
    grid_container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

console.log(createGrid(16,16));