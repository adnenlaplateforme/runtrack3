function showhide() {
  const button = document.getElementById('button')
  const elem = document.getElementById('article')
  const classes = elem.classList
  button.addEventListener('click', () => {
    classes.toggle('hidden')
  })
}
showhide()
