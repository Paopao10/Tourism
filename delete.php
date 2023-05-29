<?php
$host = "sql12.freemysqlhosting.net";
$dbusername = "sql12621883";
$dbpassword = "QgMZz25riu";
$dbname = "sql12621883";
$port = 3306;

// Get the ID of the tourist to delete from the POST request
$id = $_POST['id'];

// Database Connection
$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname, $port);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Delete the tourist with the given ID
$sql = "DELETE FROM touristregistration WHERE id = '$id'";
if (mysqli_query($conn, $sql)) {
  echo "Tourist deleted successfully";
} else {
  echo "Error deleting tourist: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
