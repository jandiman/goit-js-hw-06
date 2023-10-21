const createBox = document.querySelector("div.controls");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function newBox(amount) {
  const boxDiv = document.getElementById("boxes");
  boxDiv.innerHTML = "";

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxDiv.appendChild(box);

    width += 10;
    height += 10;
  }
}

function clearBoxes() {
  const boxDiv = document.getElementById("boxes");
  boxDiv.innerHTML = "";
}

const createBtn = document.querySelector("[data-create]");
createBtn.textContent = "New";
createBtn.addEventListener("click", function () {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    newBox(amount);
  } else {
    console.log("Please enter a number between 1 and 100.");
  }
});

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.textContent = "Clear";
destroyBtn.addEventListener("click", clearBoxes);
