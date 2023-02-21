<?php

  session_start();

  print_r($_SESSION);

  $name = !empty($_SESSION['name']) ? $_SESSION['name'] : "Guest";

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
  <h3>Hello <?php echo $name; ?></h3>
  <a href="/website5/page4.php">Logout</a>
</body>
</html>