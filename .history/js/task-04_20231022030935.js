const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

incrementEl.addEventListener("click", handleClick);

let counter = 0;

function handleClick(event) {
  const action = event.target.dataset.action;

  if (action === "increment") {
    counter++;
  } else if (action === "decrement") {
    counter--;
  }

  counterValue.textContent = counter;
}
