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
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "table";
  };
};

makeTable(16, 16);

const table = document.querySelector(".table");
table.addEventListener('click', runEvent);

function runEvent(e) {
  table.style.backgroundColor = "red";
  console.log(e)
}






