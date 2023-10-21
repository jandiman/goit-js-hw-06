const bodyEl = document.querySelector("body");
const bgColor = document.querySelector(".color");
const chgColorBtn = document.querySelector(".change-color");

bgColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
