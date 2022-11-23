const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const arrayPixel = document.getElementsByClassName('pixel');
const clearPixelBoard = document.getElementById('clear-board');

function createPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      lines.appendChild(pixel);
    }
    pixelBoard.appendChild(lines);
  }
}

function SelectedBlackColor() {
  const addClassSelected = colorPalette.firstElementChild;
  addClassSelected.className = 'color black selected';
  return addClassSelected;
}

function cgclick(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function clickColor() {
  const allcolors = document.querySelectorAll('.color');
  for (let index = 0; index < allcolors.length; index += 1) {
    allcolors[index].addEventListener('click', cgclick);
  }
}

function insertColor(event) {
  const selectedColor = document.getElementsByClassName('selected');
  if (selectedColor[0].classList.contains('black')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = 'black';
  }
  if (selectedColor[0].classList.contains('blue')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = 'blue';
  }
  if (selectedColor[0].classList.contains('red')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = 'red';
  }
  if (selectedColor[0].classList.contains('green')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = 'green';
  }
}

function printPixel() {
  for (let index = 0; index < arrayPixel.length; index += 1) {
    arrayPixel[index].addEventListener('click', insertColor);
  }
}

function clear() {
  clearPixelBoard.addEventListener('click', () => {
    for (let index = 0; index < arrayPixel.length; index += 1) {
      arrayPixel[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = SelectedBlackColor();

createPixelBoard();
clickColor();
printPixel();
clear();
