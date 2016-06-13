<?php

$target_path = "../images/";
$path = "/car_website/images/";
if(isset($_POST['submit'])){
	
	$name = addslashes($_FILES['file']['name']);
	$image = addslashes(file_get_contents($_FILES['file']['tmp_name']));
	$dir_path = addslashes($path);
	

	if(isset($_FILES['file']['tmp_name'])){
		echo "file name is determined<br>";
		include("myConnect.php");

		$conn = $DBH;

		$SQL1 = "INSERT INTO image (name, upload_img, url) values ('$name', '$image', '$dir_path')";
		$STH=$conn->prepare($SQL1);
		$STH->execute();
		$row=$STH;
		if($row){
			echo count($row) . " record has been added to db";
			echo "<br>".$name;
		}

		}else{
		echo "need to determine file";
		
		}





}else{
	echo "Form has not been submitted";
}

?>