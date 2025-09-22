function citation() {
  const text = document.getElementById("citation").textContent;
  const button = document.querySelector("#button");
  button.addEventListener("click", (e) => {
    console.log(text);
  });
}
citation();
/* citation()
function citation2() {
  const text = document.getElementById('citation').textContent
  console.log(text)
} */
