function jourtravaille(date) {
  const jourferriers = [
    new Date(2000, 0, 1),
    new Date(2000, 0, 6),
    new Date(2000, 1, 14),
    new Date(2000, 1, 25),
    new Date(2000, 3, 12),
    new Date(2000, 3, 13),
    new Date(2000, 4, 1),
    new Date(2000, 4, 8),
    new Date(2000, 4, 21),
    new Date(2000, 4, 31),
    new Date(2000, 5, 1),
    new Date(2000, 6, 14),
    new Date(2000, 7, 15),
    new Date(2000, 10, 1),
    new Date(2000, 10, 11),
    new Date(2000, 11, 25),
    new Date(2000, 11, 31),
  ];
  for (let index = 0; index < jourferriers.length; index++) {
    const element = jourferriers[index];
    if (date - element === 0) {
      console.log(`${date} : jour ferier`);
      break;
    } else if (date.getDay() === 0 || date.getDay() === 6) {
      console.log(`${date} : jour ferier le weekend`);
      break;
    } else {
      console.log(`${date} : jour travail`);
      break;
    }
  }
}
jourtravaille(new Date(2000, 0, 10));
