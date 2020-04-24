<?php

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