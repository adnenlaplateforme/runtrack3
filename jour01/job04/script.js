function bisextile(annee) {
  if ((annee % 4 === 0 && annee % 100 > 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    annee: document.getElementById("annee").value,
  };
  const res = bisextile(data.annee);
  if (res) {
    console.log("annee bisextile");
  } else {
    console.log("annee non bisextile");
  }
});

/* function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // On inscrit les données dans l'objet
  for (const [key, value] of Object.entries(data)) {
    FD.append(key, value);
  }
  XHR.addEventListener("load", (event) => {
    console.log("Les données ont été envoyées et la réponse chargée.");
  });

  XHR.addEventListener("error", (event) => {
    console.log("Une erreur est survenue.");
  });
  // On prepare la req
  XHR.open("POST", "http://localhost/plesk/runtrack3/jour01/job04/cors.php");
  XHR.send(FD);
} */
