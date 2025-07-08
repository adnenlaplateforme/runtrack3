function tri(numbers, order) {
  if (order === 'asc') {
    numbers.sort(function (a, b) {
      return a - b
    })
    return numbers
  }
  numbers
    .sort(function (a, b) {
      return a - b
    })
    .reverse()
  return numbers
}
console.log(tri([4, 9, 1, 3, 12, 100], 'asc'))
