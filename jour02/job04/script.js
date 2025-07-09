document.addEventListener('keydown', (e) => {
  const textareaElem = document.getElementById('keylogger')
  console.log(document.activeElement)
  if (document.activeElement.id === 'keylogger') {
    textareaElem.value = textareaElem.value + e.key
  }
  textareaElem.innerText = textareaElem.value + e.key
})
