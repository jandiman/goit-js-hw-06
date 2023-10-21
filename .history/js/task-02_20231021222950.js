const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  ingredientList.appendChild(...liElement);
});
