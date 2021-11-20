const container = document.querySelector(".container");

// const table = document.createElement('div');
// table.classList.add('grid-square');
// table.textContent = 'hello';

// container.appendChild(table);
function makeTable(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++){
    const cell = document.createElement('div');
    // cell.innerText = (i + 1);
    container.appendChild(cell).className = "table";
  };
};

makeTable(16, 16);

// const container = document.querySelector('.container')
const grids = document.querySelectorAll('.table')
grids.forEach(element => {
  element.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = randomColor();
    // console.log(e)
  })
});

function randomColor() {
  var generateColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return generateColor;
}

function resizeGrid() {
  sketchSize = prompt("Enter 1 to 100 to resize sketch");
  return sketchSize;
}

const clear = document.querySelector('.clear-button')
clear.addEventListener('click', () => {
  grids.forEach(element => {
    element.style.backgroundColor = null;
  })
})
