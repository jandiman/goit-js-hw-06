const textInput = document.querySelector("input");

textInput.classList.add("text-input");
textInput.setAttribute("data-action", "remove");

const validateInput = document.querySelector('[data-action="remove"]');

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});
