const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  ulIngredients.appendChild(liElement);
});
