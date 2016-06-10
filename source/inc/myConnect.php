<?php
$_SERVER="localhost";
$_USER="root";
$_PASS="";
$_DBNAME="cars"; 

$DBH = new PDO("mysql:host=$_SERVER;dbname=$_DBNAME","$_USER","$_PASS");

if(!$DBH){
	echo "could not connect";
	exit;
}


?>