<?php
session_start();

$name = $_SESSION['login_user'];
$response;

$servername = "localhost";
$username = "root";
$dbName = "user_database";
$conn = mysqli_connect($servername, $username, "", $dbName);
$sql = "SELECT images FROM image_table WHERE username='".$name."'";
$result = mysqli_query($conn, $sql);
$json = mysqli_fetch_assoc($result);
$response = json_encode($json, JSON_UNESCAPED_SLASHES);

echo $response;
?>