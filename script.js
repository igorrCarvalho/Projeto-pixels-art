function createPixels() {
    let pixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoard.appendChild(pixel);
    }
}

createPixels();