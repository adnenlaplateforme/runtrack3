function addone() {
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    document.getElementById('compteur').innerHTML =
      parseInt(document.getElementById('compteur').innerHTML) + 1
  })
}
addone()
