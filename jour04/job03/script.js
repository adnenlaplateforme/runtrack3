async function afficheJsonPromesse(path) {
  const response = await fetch(path)
  return await response.json()
}
const jsonPromesse = afficheJsonPromesse(
  'http://localhost/runtrack3/jour04/job03/pokemon.json',
)
async function filterPokemon(str) {
  str.then((value) => {
    const queryString = window.location.search
    const searchParams = new URLSearchParams(queryString)
    const id = parseInt(searchParams.get('id'))
    const name = searchParams.get('name')
    const type = searchParams.get('type')
    const arr = value.filter(
      (d) => d.name.french === name || d.id === id || d.type.includes(type),
    )
    const tableElement = document.getElementById('table')
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
        ${arr
          .map((el, index) => {
            return `
          <tr>
            <td>${el.id}</td>
            <td>${el.name.french}</td>
            <td>${el.type.join(' ')}</td>
            <td>
              <ul>
                <li>${'HP:' + el.base.HP}</li>
                <li>${'Attack:' + el.base.Attack}</li>
                <li>${'Defense:' + el.base.Defense}</li>
                <li>${'Speed:' + el.base.Speed}</li>
              </ul>
            </td>
          </tr>`
          })
          .join('')}
        </tbody>
      </table>
              `
    console.log(arr)
  })
}
filterPokemon(jsonPromesse)
