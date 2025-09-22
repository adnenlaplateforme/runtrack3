document.getElementById("button").addEventListener("click", async () => {
  try {
    const response = await fetch("./expression.txt");

    if (!response.ok) {
      throw new Error("Fichier non trouvé");
    }

    const texte = await response.text();
    const elemExpression = document.getElementById("expression");
    elemExpression.innerText = texte;
  } catch (error) {
    console.error("Erreur :", error);
  }
});
