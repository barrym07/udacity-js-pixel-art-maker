

// Global variables defined here to allow for proper usage in multiple functions
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

// The main function that enables the grid to be made. It uses query selector to find the ids of inputs for height and width and grabs the value. This value is passed as inputs to the for loops and allows the rows and columns to be made based on the data input.
function makeGrid() {
  let gridHeight = document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;
  // If grid already present, clears any cells that have been filled in, meets Criteria "The user can reset the grid to a blank state."
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  // Creates the rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    // j is a typical nested loop replacement for i but it could be called cell or column instead
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // Coloring logic, listens to a cell (td element) to be clicked and will change the color to the value of the color picker. Meets the Criteria, "The user can color the pixels in the grid."
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

// Provides a default blank grid
makeGrid(10,10);

// Callback function to listen to the form submit button and prevent the default of refreshing the page. 'e' is short for event but it could be called anything.
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});

// Function used to erase the square, not a requirement but a little quality of life improvement.
pixelCanvas.addEventListener('dblclick', e => {
  e.target.style.backgroundColor = null;
});
