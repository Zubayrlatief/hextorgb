const redInput = document.getElementById('red');
  const greenInput = document.getElementById('green');
  const blueInput = document.getElementById('blue');
  const hexOutput = document.getElementById('hex');

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function updateHex() {
    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);
    const hex = rgbToHex(red, green, blue);
    hexOutput.textContent = hex.toUpperCase();
  }

  redInput.addEventListener('input', updateHex);
  greenInput.addEventListener('input', updateHex);
  blueInput.addEventListener('input', updateHex);


  updateHex();