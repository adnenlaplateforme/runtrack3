function bisextile(annee) {
  if ((annee % 4 === 0 && annee % 100 > 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const res = bisextile(2400);
if (res) {
  alert("annee bisextile");
} else {
  alert("annee non bisextile");
}
