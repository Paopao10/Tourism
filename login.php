<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Database Connection
  $host = "sql12.freemysqlhosting.net";
  $dbusername = "sql12621883";
  $dbpassword = "QgMZz25riu";
  $dbname = "sql12621883";
  $port = 3306;

  $conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname, $port);
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if ($username === 'admin' && $password === 'password') {
    // Successful login
    header('Location: touristreg.html');
    exit();
  } else {
    // Failed login
    echo 'Invalid username or password';
  }
}
?>
