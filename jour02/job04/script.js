document.addEventListener('keydown', (e) => {
  const textareaElem = document.getElementById('keylogger')
  if (document.activeElement.id === 'keylogger') {
    textareaElem.value = textareaElem.value + e.key
  }
  textareaElem.value = textareaElem.value + e.key
})
