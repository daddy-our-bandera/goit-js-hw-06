const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
input.addEventListener("input", inputNumberOn);
let inputValue;
function inputNumberOn(evt) {
  inputValue = evt.currentTarget.value;
}

function createBoxes() {
  let arr = [];
  let size = 30;
  for (let i = 0; i <= inputValue; i += 1) {
    let totalSize = size + i * 10 + "px";
    let div = document.createElement("div");

    div.style.backgroundColor = getRandomHexColor();
    div.style.height = totalSize;
    div.style.width = totalSize;

    arr.push(div);
  }
  boxes.append(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
