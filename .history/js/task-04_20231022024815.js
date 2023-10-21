const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

btnAdd.addEventListener("click", handleClick);

let counter = 0;

function handleClick(e) {
  counter++;
  console.log(counter);
}
