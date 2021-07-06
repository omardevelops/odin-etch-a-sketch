const grid_container = document.querySelector('#grid_container');
// console.log(grid_container);

function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const newDiv = document.createElement('div');
            grid_container.appendChild(newDiv);
        }
    }
    grid_container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function addEventListenersToDivs() {
    const divs = Array.from(grid_container.getElementsByTagName('div'));
    divs.forEach(function (div) {
        div.addEventListener('mouseenter', function() {
            div.style.background = 'yellow';
        });
    });
}

createGrid(16,16);
addEventListenersToDivs();