function isnombrepremier(a) {
  if (a === 0 || a === 1) {
    return false
  }
  for (let index = 2; index <= a; index++) {
    if (a % index === 0) {
      return false
    }
    return true
  }
}
function sommenombrespremiers(a, b) {
  if (isnombrepremier(a) && isnombrepremier(b)) {
    return a + b
  } else {
    return false
  }
}
console.log(sommenombrespremiers(7, 10))
