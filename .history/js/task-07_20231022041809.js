const fontControl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontControl.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textEl.style.fontSize = fontSize;
});
