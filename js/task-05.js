const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (onInput) => {
  if (onInput.currentTarget.value) {
    span.textContent = onInput.currentTarget.value;
    return;
  } else {
    span.textContent = "Anonymous";
  }
});
