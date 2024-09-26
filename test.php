<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the name from the form
    $name = htmlspecialchars($_POST['name']);
    $greeting = "Hello, " . $name . "!";
} else {
    $greeting = "Hello, Guest!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }
        input[type="text"] {
            padding: 10px;
            margin: 10px 0;
            width: 200px;
        }
        input[type="submit"] {
            padding: 10px 20px;
        }
    </style>
</head>
<body>

<h1><?php echo $greeting; ?></h1>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <input type="text" name="name" placeholder="Enter your name" required>
    <input type="submit" value="Greet Me">
</form>

</body>
</html>