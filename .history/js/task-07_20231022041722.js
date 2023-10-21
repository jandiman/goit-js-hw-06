const fontControl = document.getElementById("font-size-control");

fontControl.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textElement.style.fontSize = fontSize;
});
