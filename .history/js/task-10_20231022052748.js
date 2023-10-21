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

// Function to destroy boxes
function destroyBoxes() {
  const boxDiv = document.getElementById("boxes");
  boxDiv.innerHTML = ""; // Clear all contents
}

// Event listener for the "Create" button
const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", function () {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    newBox(amount);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Event listener for the "Destroy" button
const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
