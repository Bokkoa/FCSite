<?php
if(isset($_POST)){
    require_once 'includes/conexion.php';
    
    //GETTING DATA FROM REQUEST (ONLY WORKS IN ANGULAR)
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    // $name = (isset($_POST['name'])) ? mysqli_real_escape_string($db, $_POST['name']) : false;
	// $message = (isset($_POST['message'])) ? mysqli_real_escape_string($db, $_POST['message']) : false;
    
    $name = (isset($request->name)) ? mysqli_real_escape_string($db, $request->name) : false;
	$message = (isset($request->message)) ? mysqli_real_escape_string($db, $request->message) : false;
	
    $errors = array();

    if(!empty($name) && !empty($message) && !is_numeric($name) && !preg_match("/[0-9]/", $name)){
        $name_validate = true;
    }else{
        $name_validate = false;
        $errors['name'] = "El nombre no es valido, nombre enviado: $name";
        
        $response = array(
            "status" => '500',
            "errors" => $errors
        );

        echo json_encode($response);
    }

    if(count($errors) == 0 ){
        $date = date("Y-m-d H:i:s");
        $sql = "INSERT INTO messages (name, message, date) VALUES('$name', '$message', '$date');";
        $save = mysqli_query($db, $sql);

        $response = array(
            "status" => '200',
            "data" => $save
        );
        echo json_encode($response);
    }
    else{
        $errors['sql'] = "Ocurrió un error al guardar en la base de datos.";
        
        $response = array(
            "status" => '500',
            "errors" => $errors
        );

        echo json_encode($response);
    }

}
?>