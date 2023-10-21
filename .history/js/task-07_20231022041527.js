document
  .getElementById("font-size-control")
  .addEventListener("input", function () {
    const fontSize = this.value + "px";
    document.getElementById("text").style.fontSize = fontSize;
  });
