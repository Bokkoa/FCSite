<?php
require_once 'includes/conexion.php';

        $sql = "SELECT * FROM messages";

        $messages = mysqli_query($db, $sql);
        
        $result = array();
        if($messages && mysqli_num_rows($messages) >= 1){
                $result = $messages;
        }    
        
		 if(!empty($result)){	 
		 
                    while($message = mysqli_fetch_assoc($result))
					{
						
						echo json_encode($message);
					}
		 }
?>