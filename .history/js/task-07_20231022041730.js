const fontControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontControl.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textElement.style.fontSize = fontSize;
});
