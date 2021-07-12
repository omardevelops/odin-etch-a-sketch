const grid_container = document.querySelector('#grid_container');
const first_colors = ["#ea698b","#d55d92","#c05299","#ac46a1","#973aa8","#822faf","#6d23b6","#6411ad","#571089","#47126b"];

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
            let index = Math.floor(Math.random() * 10);
            div.style.background = first_colors[index];
        });
    });
}

function clearGrid() {
    const divs = Array.from(grid_container.getElementsByTagName('div'));
    divs.forEach(div => 
        div.style.background = 'white'
        );
}

function setSize(width, height) {
    // Remove all divs
    let divs = Array.from(grid_container.getElementsByTagName('div'));
    divs.forEach(div => grid_container.removeChild(div));

    // Create new grid
    createGrid(width, height);
    addEventListenersToDivs();
}

// Clear Grid Button
const clear_button = document.querySelector('#clear_button');
clear_button.addEventListener('click', clearGrid);

// Slider for size
const size_slider = document.querySelector('#size_slider');
size_slider.addEventListener('change', function() {
    let size = this.value;
    const divs = Array.from(grid_container.getElementsByTagName('div'));
    setSize(size,size);
    divs.forEach(div => div.style.borderWidth = '1px');
});
size_slider.addEventListener('input', function() {
    const label = document.querySelector('#size_label');
    let size = this.value;
    label.textContent = `${size}x${size}`;

});

createGrid(16,16);
addEventListenersToDivs();