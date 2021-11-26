<?php 
session_start();
$filename = $_FILES['file']['name'];
$ext = pathinfo($filename, PATHINFO_EXTENSION);

if ($ext == 'csv') {
   
	$location = "../upload/".$filename;
	if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){

		 $_SESSION['success'] = "The data has been saved locally. Click the load button to show the data !";

	}
	else{
		echo 'fail';
	}
}
else{
	 $_SESSION['error'] = "Error, Upload a file with a CSV extension !";
}


?>