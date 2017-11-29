<?php
session_start();

$directory = "image_gallery_pics/";
$target_file = $directory . basename($_FILES["fileInput"]["name"]);
$errNumber = 0;
$fileType = pathinfo($target_file, PATHINFO_EXTENSION);
$response;

if(isset($_POST["fileSubmit"])) {
	$imageSize = getimagesize($_FILES["fileInput"]["tmp_name"]);
	if($imageSize !== false) {
		$errNumber = 0;
	} else {
		$errNumber = 1; //file is not an image
	}
}

if(file_exists($target_file)) {
	$errNumber = 2; //file already exists
}

if($_FILES["fileInput"]["size"] > 500000) {
	$errNumber = 3; //file is too large
}

if($fileType != "jpg" && $fileType != "png" && $fileType != "jpeg" && $fileType != "gif") {
	$errNumber = 4; //file is wrong format
}

if(isset($_SESSION['login_user'])) {
	
	$name = $_SESSION['login_user'];
	$servername = "localhost";
    $username = "root";
    $dbName = "user_database";
    $conn = mysqli_connect($servername, $username, "", $dbName);
	$sql = "SELECT images FROM image_table WHERE username='".$name."'";
    if(move_uploaded_file($_FILES["fileInput"]["tmp_name"], $target_file)) {
		$result = mysqli_query($conn, $sql);
		$json = mysqli_fetch_assoc($result);
		$array = json_decode($json["images"]);
		array_push($array, $_FILES["fileInput"]["name"]);
        $json_two = json_encode($array);
		$sql_two = "UPDATE image_table SET images='".$json_two."' WHERE username='".$name."'";
		mysqli_query($conn, $sql_two);
	    $errNumber = 0; 
    } else {
	    $errNumber = 5; //problem uploading the file
    }
	mysqli_close($connection);
} else {
	$errNumber = 6; //user not logged in
}

if($errNumber == 0) {
	header("Location: image_gallery.html");
} else {
	echo $errNumber;
}
?>