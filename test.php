<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'testdb';

// Create connection
//$conn = new mysqli($host, $username, $password, $database);
$conn = mysqli_connect('localhost', 'root', '');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>