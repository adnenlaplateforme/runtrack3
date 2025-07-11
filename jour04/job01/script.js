async function afficheExpression(path) {
  const response = await fetch(path)
  const expression = await response.text()
  const button = document.getElementById('button')
  const elemExpression = document.getElementById('expression')
  button.addEventListener('click', () => {
    elemExpression.innerText = expression
  })
}
afficheExpression('http://localhost/runtrack3/jour04/job01/expression.txt')
