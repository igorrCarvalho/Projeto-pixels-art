window.onload = function() {
    const black = document.querySelector('.color');
    black.classList.add('black')
    black.classList.add('selected')
    
    function createPixels() {
        let pixelBoard = document.querySelector('#pixel-board');
        for (let index = 0; index < 25; index += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelBoard.appendChild(pixel);
        }
    }
    createPixels();

    function colorSelect() {
        const colors = document.querySelectorAll('.color');
        for (let index = 0; index < colors.length; index += 1) {
            colors[index].addEventListener('click', function(color) {
                let colorChoosed = document.querySelector('.selected');
                colorChoosed.classList.remove('selected');
                color.target.classList.add('selected')
            })
        }
    }
    colorSelect();
    
    function applyColor() {
        const bigPixel = document.querySelector('#pixel-board');
        bigPixel.addEventListener('click', function(pixel) {
            let colorSelected = document.querySelector('.selected')
            let color = colorSelected.classList[1];
            pixel.target.id = color;
        })
    }
    applyColor();
}


