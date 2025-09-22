async function filterPokemon() {
  try {
    const response = await fetch("./pokemon.json");
    if (!response.ok) throw new Error("Impossible de charger les données");
    const pokemons = await response.json();
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const id = parseInt(searchParams.get("id"));
    const name = searchParams.get("name");
    const type = searchParams.get("type");
    const resultat = pokemons.filter(
      (d) => d.name.french === name || d.id === id || d.type.includes(type)
    );
    const tableElement = document.getElementById("table");
    tableElement.innerHTML = `<table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>type</th>
            <th>base</th>
          </tr>    
        </thead>
        <tbody>
        ${
          resultat &&
          resultat
            .map((el) => {
              return `
          <tr>
            <td>${el.id}</td>
            <td>${el.name.french}</td>
            <td>${el.type.join(" ")}</td>
            <td>
              <ul>
                <li>${"HP:" + el.base.HP}</li>
                <li>${"Attack:" + el.base.Attack}</li>
                <li>${"Defense:" + el.base.Defense}</li>
                <li>${"Speed:" + el.base.Speed}</li>
              </ul>
            </td>
          </tr>`;
            })
            .join("")
        }
        </tbody>
      </table>
              `;
  } catch (error) {
    console.error("Erreur de filtrage :", error);
  }
}
filterPokemon();
