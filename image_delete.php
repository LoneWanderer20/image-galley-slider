<?php
session_start();

if(isset($_SESSION['login_user'])) {
	$name = $_SESSION['login_user'];
	$servername = "localhost";
    $username = "root";
    $dbName = "user_database";
    $conn = mysqli_connect($servername, $username, "", $dbName);
	$sql = "SELECT images FROM image_table WHERE username='".$name."'";   
	$result = mysqli_query($conn, $sql);
	$json = mysqli_fetch_assoc($result);
	$array = json_decode($json["images"]);
	array_pop($array);
    $json_two = json_encode($array);
	$sql_two = "UPDATE image_table SET images='".$json_two."' WHERE username='".$name."'";
	mysqli_query($conn, $sql_two); 
	mysqli_close($connection);	
}
?>