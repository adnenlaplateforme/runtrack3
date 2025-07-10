let res = ''
document.addEventListener('keyup', (e) => {
  res = res + e.key
  if (res === 'laplateforme') {
    const imgElement = document.getElementById('image')
    const classes = imgElement.classList
    classes.toggle('hidden')
  }
})
