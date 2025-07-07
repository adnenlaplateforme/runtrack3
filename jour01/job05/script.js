function affichejourssemaines() {
  const jourssemaines = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  for (let index = 0; index < jourssemaines.length; index++) {
    const element = jourssemaines[index];
    console.log(element);
  }
}
affichejourssemaines();
