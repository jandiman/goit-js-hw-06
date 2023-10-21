const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

incrementEl.addEventListener("click", handleClick);

let counter = 0;

function handleClick(e) {
  counter++;
  console.log(counter);
}
