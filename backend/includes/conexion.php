<?php
    
    //FOR CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');


    $server = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'mydb';
    $db = mysqli_connect($server, $user, $password, $database);

    mysqli_query($db, "SET NAMES 'utf-8'");

    //Iniciar la sesion
    if(!isset($_SESSION)){
        session_start();
    }
?>