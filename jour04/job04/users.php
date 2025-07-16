<?php
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

$sql = "SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'nom', nom, 'prenom', prenom, 'email', email)) AS user_json FROM utilisateurs";
$result = ($conn->query($sql));
if ($result) {
    $row = $result->fetch_assoc();
} else {
    echo "Erreur :" . $conn->error;
}
