<?php

header("content-type: image/jpg");
include("myConnect.php");
$connect = $DBH;

	$sql1 = "SELECT name, upload_img, url from image WHERE id =18";
	$result=$connect->prepare($sql1);
	$result->execute();
	while($row=$result->fetch(PDO::FETCH_ASSOC)){
		
		$imageData = base64_decode($row['upload_img']);
		$img_name = $row['name'];
		$path = $row['url'];
		
	
	if($result){
		
		
		echo "<img src =".$path.$img_name." width=200 height=180 >";
		
	}
	else {
		echo "Image not uploaded";
	}
}

?>