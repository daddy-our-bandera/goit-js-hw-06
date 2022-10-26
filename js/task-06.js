const input = document.querySelector("#validation-input");
input.addEventListener("blur", focusFunc);

function focusFunc(evt) {
  if (evt.currentTarget.value.length >= input.getAttribute("data-length")) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
