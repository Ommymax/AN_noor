<?php
// Database connection details
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$db_name = "register_db"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // SQL query to check if username and password match in database
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Username and password match, user is authenticated
        echo "Login successful";
    } else {
        // Username and password do not match
        echo "Invalid username or password";
    }
}

// Close connection
$conn->close();
?>
