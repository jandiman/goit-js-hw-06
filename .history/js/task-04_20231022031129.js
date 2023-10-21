const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

incrementEl.addEventListener("click", handleClick);
decrementEl.addEventListener("click", handleClick);

let counter = 0;

function handleClick(event) {
  const click = event.target.dataset.click;

  if (click === "increment") {
    counter++;
  } else if (click === "decrement") {
    counter--;
  }

  counterValue.textContent = counter;
}
