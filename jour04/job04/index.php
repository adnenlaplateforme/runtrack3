<?php
include 'users.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job04</title>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $queries = json_decode($row['user_json']);
            foreach ($queries as $key => $value) {
                echo "
                <tr> 
                    <td>$value->id</td>
                    <td>$value->nom</td> 
                    <td>$value->prenom</td> 
                    <td>$value->email</td> 
                </tr>";
            }
            ?>
        </tbody>
    </table>
    <!-- Bouton qui recharge toute la page -->
    <form method="post">
        <button type="submit">Update</button>
    </form>
</body>

</html>