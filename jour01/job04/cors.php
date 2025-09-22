<?php
var_dump($_POST);
// Autoriser CORS si besoin (si ton front est sur un autre domaine/port)
header("Access-Control-Allow-Origin: *");

// Vérifier si une année a été envoyée
if (isset($_POST['annee'])) {
    $annee = htmlspecialchars($_POST['annee']);
    echo "L'année envoyée est : " . $annee;
} else {
    echo "Aucune donnée reçue.";
}
