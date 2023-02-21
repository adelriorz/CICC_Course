<?php

  session_start();

  // print_r($_SESSION);
  // $_SESSION['name'] = "";

  $name = $_SESSION['name'];
  $email = $_SESSION['email'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <h3>Thank you <?php echo $name; ?></h3>
  <p>You have subscribed with the email <?php echo $email; ?></p>
  <a href="/website5/page3.php">Go to page 3</a>
</body>
</html>