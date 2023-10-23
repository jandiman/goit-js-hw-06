const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // prettier-ignore
  const {elements: { email, password }} = e.currentTarget;
  console.dir(e.currentTarget);

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in!");
  }
  console.log({`Email: ${email.value}, Password: ${password.value}`});

  e.currentTarget.reset();
}
