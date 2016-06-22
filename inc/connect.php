<?php
$car_id = $_POST['first'];
if(!isset($_POST['car_id'])){
include("myConnect.php");
	$query1 ="SELECT * FROM car WHERE car_id = 1001";  

	$STH=$DBH->prepare($query1);
	$STH->execute();
	while($row=$STH->fetch(PDO::FETCH_ASSOC)){

	if($row > 0){
		$id = $row['car_id'];
		$make = $row['car_make'];
		$colour = $row['car_colour'];
		
		echo $id . "<br>"; 
		echo $make . "<br>";
		echo $colour;
		
	}else{
		echo "No rows";
	}

	}

}else{
	echo "This is not right";
}

?>