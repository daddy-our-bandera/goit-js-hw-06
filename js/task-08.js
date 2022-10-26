const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть усі поля!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
