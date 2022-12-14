window.onload = function () {
  const black = document.querySelector('.color');
  black.classList.add('black');
  black.style.backgroundColor = 'black';
  black.classList.add('selected');
  const divColor2 = document.querySelectorAll('.color')[1];
  const divColor3 = document.querySelectorAll('.color')[2];
  const divColor4 = document.querySelectorAll('.color')[3];

  function generateColor() {
    const letters = '0123456789ABCDEF';
    let generatedColor = '#';
    for (let index = 0; index < 6; index += 1) {
      generatedColor += letters[Math.floor(Math.random() * 16)];
    }

    return generatedColor;
  }

  divColor2.style.backgroundColor = generateColor();
  divColor3.style.backgroundColor = generateColor();
  divColor4.style.backgroundColor = generateColor();

  function createPixels() {
    const pixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
  createPixels();

  function colorSelect() {
    const colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].addEventListener('click', function (color) {
        const colorChoosed = document.querySelector('.selected');
        colorChoosed.classList.remove('selected');
        color.target.classList.add('selected');
      });
    }
  }
  colorSelect();
  
  function applyColor() {
    const bigPixel = document.querySelector('#pixel-board');
    bigPixel.addEventListener('click', function (pixel) {
      const colorSelected = document.querySelector('.selected');
      const color = colorSelected.style.backgroundColor;
      pixel.target.style.backgroundColor = color;
    });
  }
  applyColor();

  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    const allPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixels.length; index += 1) {
      allPixels[index].style.backgroundColor = 'white';
    }
  });

  const btn = document.querySelector('#generate-board');

  btn.addEventListener('click', function () {
    const boardNum = document.querySelector('#board-size');
    let boardSize = boardNum.value;
    if (boardSize <= 0 || boardSize === undefined || boardSize === null) {
      window.alert('Board Inv??lido!');
    } else if (boardSize > 50) {
      boardSize = 50;
      const pixelContainer = document.querySelector('#pixel-board');
      let containerWidth = (40 * boardSize) + (boardSize * 2);
      containerWidth = containerWidth + 'px';
      pixelContainer.style.width = containerWidth;
      pixelContainer.style.height = containerWidth;
      pixelContainer.innerHTML = '';
      for (let index = 0; index < boardSize ** 2; index += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelContainer.appendChild(pixel);
      }
    } else if (boardSize <= 4) {
      window.alert('Board incorreto! Deve estar entre 5 e 50');
    } else {
      boardSize = parseInt(boardSize);
      const pixelContainer = document.querySelector('#pixel-board');
      let containerWidth = (40 * boardSize) + (boardSize * 2);
      containerWidth = containerWidth + 'px'; 
      pixelContainer.style.width = containerWidth;
      pixelContainer.style.height = containerWidth;
      pixelContainer.innerHTML = '';
      for (let index = 0; index < boardSize ** 2; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelContainer.appendChild(pixel);
      }
    }
  });
};
