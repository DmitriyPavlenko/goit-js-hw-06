function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const backgroundColor = document.querySelector("body");

function changeColorRandom() {
  const color = getRandomHexColor();
  backgroundColor.style.backgroundColor = `${color}`;
  colorName.textContent = color;
}
btnChangeColor.addEventListener("click", changeColorRandom);
