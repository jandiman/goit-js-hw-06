const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

incrementEl.addEventListener("click", handleClick);
decrementEl.addEventListener("click", handleClick);

let counter = 0;

function handleClick(e) {
  const click = e.target.dataset.click;

  if (click === "incrementEl") {
    counter++;
  } else if (click === "decrement") {
    counter--;
  }

  counterValue.textContent = counter;
}
