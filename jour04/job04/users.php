<?php


function connectDatabaseWithServer()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "utilisateurs";

    // connect the database with server

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_errno) {
        echo "Failed to connect to MySQL :" . $conn->connect_errno;
        exit();
    }
    return $conn;
}
//$sql = "SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'nom', nom, 'prenom', prenom, 'email', email)) AS user_json FROM utilisateurs";

function selectUsers()
{
    $conn = connectDatabaseWithServer();
    $sql = "select * from utilisateurs";
    $result = $conn->query($sql);
    if ($result) {
        $row = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $json = json_encode($row);
        echo $json;
    } else {
        echo "Erreur :" . $conn->error;
    }
}
selectUsers();
