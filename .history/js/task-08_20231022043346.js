const loginForm = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // prettier-ignore
  const {elements: { email, password }} = e.currentTarget;
  console.dir(event.currentTarget);

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in!");
  }
  console.log(`Login: ${login.value}, Password: ${password.value}`);

  e.currentTarget.reset();
}
