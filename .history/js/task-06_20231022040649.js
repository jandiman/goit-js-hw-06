const textInput = document.querySelector("input");

textInput.addEventListener("blur", () => {
  const inputValue = textInput.value;
  const expectedLength = parseInt(textInput.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
