const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // prettier-ignore
  const {elements: { email, password }} = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in!");
  }
  const userCredentials = {
    email: email.value,
    password: password.value,
  };

  console.log(userCredentials);

  e.currentTarget.reset();
}
