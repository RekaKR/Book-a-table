let click = document.getElementById("click")
let svg = document.getElementById("svg8")

click.onclick = function() {
  svg.classList.toggle("svg-visible");
  if (click.textContent == "See the tables") {
    click.innerHTML = "Hide the tables";
  } else {
    click.innerHTML = "See the tables";
  };
}