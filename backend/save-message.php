<?php
if(isset($_POST)){
    require_once 'includes/conexion.php';

    $name = (isset($_POST['name'])) ? mysqli_real_escape_string($db, $_POST['name']) : false;
	$message = (isset($_POST['message'])) ? mysqli_real_escape_string($db, $_POST['message']) : false;
	
    $errors = array();

    if(!empty($name) && !empty($message) && !is_numeric($name) && !preg_match("/[0-9]/", $name)){
        $name_validate = true;
    }else{
        $name_validate = false;
        $errors['name'] = "El nombre no es valido";
    }

    if(count($errors) == 0 ){
        $date = date("Y-m-d H:i:s");
        $sql = "INSERT INTO messages (name, message, date) VALUES('$name', '$message', '$date');";
        $save = mysqli_query($db, $sql);
		echo json_encode($save);
    }

}
?>