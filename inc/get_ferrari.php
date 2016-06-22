<?php
$car_id = $_POST['third'];
if(!isset($_POST['car_id'])){
include("myConnect.php");
	$query1 ="SELECT * 
			FROM car 
			INNER JOIN purchase 
			ON car.car_id = purchase.car_id
			INNER JOIN customer
			ON purchase.cust_id = customer.cust_id
			INNER JOIN cust_address
			ON cust_address.cust_add = purchase.cust_add
			WHERE car.car_id = 1002";  

	$STH=$DBH->prepare($query1);
	$STH->execute();
	while($row=$STH->fetch(PDO::FETCH_ASSOC)){

	if($row > 0){
		$id = $row['car_id'];
		$make = $row['car_make'];
		$colour = $row['car_colour'];
		$surname = $row['cust_lastname'];
		$firstname = $row['cust_forename'];
		$address1 = $row['cust_address_1'];
		$cpostcode = $row['cust_address_postcode'];

		?>
		<p>Vehicle Purchased By</p>

		<?php
		 echo "Car Id: ".$id." <br>"; 
		echo "Vehicle make:" . $make . "<br>";
		echo "Colour:" . $colour . "<br>";
		echo "Customer Lastname:" . $surname . "<br>";
		echo "Customer Firstname:" . $firstname . "<br>";
		echo "Customer Address:" . $address1 . "<br>";
		echo "Customer Post Code:" . $cpostcode;

	}else{
		echo "No rows";
	}

	}

}else{
	echo "This is not right";
}

?>

