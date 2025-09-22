async function fetchUsers() {
  try {
    const response = await fetch("./users.php");
    const content = await response.json();
    const tableElement = document.getElementById("table");
    tableElement.innerHTML = `<table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
          </tr>    
        </thead>
        <tbody>
        ${content
          .map((el, index) => {
            return `
            <tr>
              <td>${el.id}</td>
              <td>${el.nom}</td>
              <td>${el.prenom}</td>
              <td>${el.email}</td>
            </tr>
            `;
          })
          .join(" ")}
        </tbody>
        </table>
        `;
  } catch (error) {
    console.error(error);
  }
}
fetchUsers();
