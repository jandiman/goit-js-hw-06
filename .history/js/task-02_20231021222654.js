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
  const ingredientList = document.createElement("li");
  ingredientList.classList.add("item");
  ingredientList.textContent = ingredient;
  ulIngredients.appendChild(ingredientList);
});
