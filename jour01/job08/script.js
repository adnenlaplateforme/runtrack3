function isnombrepremier(a) {
  if (a === 0 || a === 1) {
    return false;
  }
  for (let index = 2; index <= a; index++) {
    if (a % index === 0) {
      return false;
    }
    return true;
  }
}
function sommenombrespremiers(a, b) {
  if (isnombrepremier(a) && isnombrepremier(b)) {
    return a + b;
  } else {
    return false;
  }
}
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre1 = parseInt(document.getElementById("nbr1").value);
  const nombre2 = parseInt(document.getElementById("nbr2").value);
  if (sommenombrespremiers(nombre1, nombre2)) {
    alert(
      "La somme des deux nombres est : " +
        sommenombrespremiers(nombre1, nombre2)
    );
  } else {
    alert("a or b is not a nombre premier");
  }
});
