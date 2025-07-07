function fizzbuzz() {
  for (let index = 1; index <= 151; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`${index} : Fizzbuzz`);
    } else if (index % 3 === 0 && index % 5 != 0) {
      console.log(`${index} : Fizz`);
    } else if (index % 5 === 0 && index % 3 != 0) {
      console.log(`${index} : Buzz`);
    }
  }
}
fizzbuzz();
