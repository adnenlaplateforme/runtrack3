function addone() {
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    document.getElementById("compteur").innerHTML =
      parseInt(document.getElementById("compteur").innerHTML) + 1;
  });
}
function decrementone() {
  const btn = document.getElementById("button2");
  btn.addEventListener("click", () => {
    document.getElementById("compteur").innerHTML =
      parseInt(document.getElementById("compteur").innerHTML) - 1;
  });
}
function reset() {
  const btn = document.getElementById("reset");
  btn.addEventListener("click", () => {
    document.getElementById("compteur").innerHTML = 0;
  });
}
addone();
decrementone();
reset();
