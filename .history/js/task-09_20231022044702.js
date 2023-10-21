const bodyEl = document.querySelector("body");
const colorSpan = document.querySelector("span.color");
const chgColorBtn = document.querySelector("button.change-color");

bgColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
