<?php
// Dossier à scanner (chemin relatif ou absolu)
$directory = __DIR__ . '/Ressources/Jeu_WebGl';  // adapte selon ton dossier

// Récupérer les fichiers (ignore dossiers et fichiers cachés)
$files = array_values(array_filter(scandir($directory), function($file) use ($directory) {
    return !is_dir($directory . '/' . $file) && substr($file, 0, 1) !== '.';
}));

// Retourner en JSON
header('Content-Type: application/json');
echo json_encode($files);