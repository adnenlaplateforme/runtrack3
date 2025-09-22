<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrer des données JSON dynamiquement avec fetch et les paramètres d’URL</title>
</head>

<body>
    <form action="#" method="get">
        <div>
            <input type="text" name="id" id="id" placeholder="id" />
        </div>
        <div>
            <input type="text" name="name" id="name" placeholder="nom" />
        </div>
        <select name="type" id="type">
            <option value="">Select an option</option>
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Ice">Steel</option>
            <option value="Dragon">Dragon</option>
        </select>
        <div>
            <button type="submit">Filter</button>
        </div>
    </form>
    <div id="table">
    </div>
    <script src="script.js"></script>
</body>

</html>