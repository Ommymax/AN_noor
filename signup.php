
<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "an_yof";

// Create connection
$conn = new mysqli($servername, $username, $password, $db_name);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fname = $_POST['fname'];
    $sname = $_POST['sname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $username = $_POST['username'];
    $password = $_POST['password'];
   
    // SQL query to insert data into database
    $sql = "INSERT INTO users (first_name, last_name, email, gender, password)
            VALUES ('$first_name', '$last_name', '$email', '$gender', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>