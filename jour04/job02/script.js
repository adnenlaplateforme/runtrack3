async function afficheJsonPromesse(path) {
  const response = await fetch(path);
  return await response.json();
}
const jsonPromesse = afficheJsonPromesse("./str.json");
function jsonValueKey(str, key) {
  str.then((value) => {
    const buttonElement = document.getElementById("button");
    const villeElement = document.getElementById("ville");
    buttonElement.addEventListener("click", () => {
      villeElement.innerText = value[key];
    });
  });
}
jsonValueKey(jsonPromesse, "city");
