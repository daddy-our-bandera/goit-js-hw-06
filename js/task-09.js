const randomColor = document.querySelector(".change-color");
const bodyStyle = document.querySelector("body");
const textColor = document.querySelector(".color");
randomColor.addEventListener("click", getColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getColor() {
  bodyStyle.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyStyle.style.backgroundColor;
}
