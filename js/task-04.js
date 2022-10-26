let value = document.querySelector("#value");
let counterValue = 0;

const valueUp = document.querySelector('[data-action="increment"]');
valueUp.addEventListener("click", up);

function up() {
  counterValue = counterValue + 1;
  return (value.textContent = counterValue);
}

const valueDown = document.querySelector('[data-action="decrement"]');
valueDown.addEventListener("click", down);

function down() {
  counterValue = counterValue - 1;
  return (value.textContent = counterValue);
}
