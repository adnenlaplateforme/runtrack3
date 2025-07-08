function jourtravaille(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  console.log(date.toLocaleDateString('fr-FR', options))
  console.log(date.getDay())
  const jourferriers = [
    new Date(Date.UTC(2000, 0, 1)),
    new Date(Date.UTC(2000, 0, 6)),
    new Date(Date.UTC(2000, 1, 14)),
    new Date(Date.UTC(2000, 1, 25)),
    new Date(Date.UTC(2000, 3, 12)),
    new Date(Date.UTC(2000, 3, 13)),
    new Date(Date.UTC(2000, 4, 1)),
    new Date(Date.UTC(2000, 4, 8)),
    new Date(Date.UTC(2000, 4, 21)),
    new Date(Date.UTC(2000, 4, 31)),
    new Date(Date.UTC(2000, 5, 1)),
    new Date(Date.UTC(2000, 6, 14)),
    new Date(Date.UTC(2000, 7, 15)),
    new Date(Date.UTC(2000, 10, 1)),
    new Date(Date.UTC(2000, 10, 11)),
    new Date(Date.UTC(2000, 11, 25)),
    new Date(Date.UTC(2000, 11, 31)),
  ]

  for (let index = 0; index < jourferriers.length; index++) {
    const element = jourferriers[index]
    if (date - element === 0) {
      console.log(
        `Le ${date.toLocaleDateString('fr-FR', options)} est un jour ferier`,
      )
      break
    } else if (date.getDay() === 0 || date.getDay() === 6) {
      console.log(
        `Le ${date.toLocaleDateString('fr-FR', options)} est un jour ferier et c'est le weekend`,
      )
      break
    } else {
      console.log(
        `Le ${date.toLocaleDateString('fr-FR', options)} est un jour travail`,
      )
      break
    }
  }
}
jourtravaille(new Date(Date.UTC(2000, 0, 9)))
