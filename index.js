import { colors } from "./colorDataSet.js";
import { hexLetters } from "./colorDataSet.js";

document.querySelector(".color").addEventListener("click", changeColor);
document.querySelector(".hex").addEventListener("click", changeHEXColor);
document.querySelector(".rgb").addEventListener("click", changeRGBColor);
document.querySelector(".hsl").addEventListener("click", changeHSLColor);

function changeColor() {
  let randColor;
  for (let i = 0; i < colors.length; i++) {
    randColor = Math.trunc(Math.random() * colors.length);
  }
  document.getElementById(
    "color-name"
  ).textContent = `Color: ${colors[randColor]}`;
  document.querySelector(".left").style.backgroundColor = colors[randColor];
}

function changeHEXColor() {
  let randColor;
  let hexName = "#";
  for (let i = 0; i < 6; i++) {
    randColor = Math.trunc(Math.random() * hexLetters.length);
    hexName = hexName.concat(hexLetters[randColor]);
  }
  document.getElementById("color-name-hex").textContent = `HEX: ${hexName}`;
  document.querySelector(".right").style.backgroundColor = hexName;
}

function changeRGBColor() {
  let rgb = [0, 0, 0];
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = Math.trunc(Math.random() * 255);
  }
  document.getElementById(
    "color-name-rgb"
  ).textContent = `RGB: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  document.querySelector(
    ".left-bottom"
  ).style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function changeHSLColor() {
  let sl = [0, 0];
  let hue = 0;
  let hsl;
  for (let i = 0; i < sl.length; i++) {
    sl[i] = Math.trunc(Math.random() * 100);
    if (i === sl.length - 1) {
      hue = Math.trunc(Math.random() * 360);
    }
  }
  hsl = `hsl(${hue}, ${sl[0]}%, ${sl[1]}%)`;
  document.getElementById("color-name-hsl").textContent = hsl;
  document.querySelector(".right-bottom").style.backgroundColor = hsl;
}
