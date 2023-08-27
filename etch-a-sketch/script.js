const gridSize = 16;
const gridContainer = document.querySelector('.grid-container');
const eraseAllButton = document.getElementById('eraseAll'); // Reference to the erase all button
const colorPicker = document.getElementById('colorPicker');
const toggleButton = document.getElementById('toggleMode'); // Reference to the toggle button
let isDrawing = false; // Flag to track whether mouse button is pressed
let isRainbowMode = false; // Flag to track the current mode

function changeColor(event) {
  if (isDrawing) {
    const selectedColor = isRainbowMode ? getRandomColor() : colorPicker.value;
    event.target.style.backgroundColor = selectedColor;
  }
}

gridContainer.addEventListener('mousedown', () => {
  isDrawing = true;
});

// Stop coloring on mouseup
gridContainer.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Toggle between rainbow and color picker mode
toggleButton.addEventListener('click', () => {
  isRainbowMode = !isRainbowMode;
  toggleButton.textContent = isRainbowMode ? 'Rainbow Mode' : 'Picker Mode';
});

// Continue coloring while moving the cursor (mouseover)
gridContainer.addEventListener('mouseover', changeColor);


  // Create the grid items and add click event listeners
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('click', changeColor);
    gridContainer.appendChild(gridItem);
  }

// Function to change the background color of the clicked grid item
function changeRandomColor(event) {
  const randomColor = getRandomColor();
  event.target.style.backgroundColor = randomColor;
}

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create the grid items and add click event listeners
for (let i = 0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.addEventListener('click', changeRandomColor);
  gridContainer.appendChild(gridItem);
}

// Erase all grid items
eraseAllButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'white';
  });
});