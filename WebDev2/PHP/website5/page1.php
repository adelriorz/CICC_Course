<?php
  if(isset($_POST['submit'])){ //if submit is defined
    session_start();
                              
    $_SESSION['name'] = htmlspecialchars($_POST['name']);
    $_SESSION['email'] = htmlspecialchars($_POST['email']);
                              
    header('Location: page2.php');
  } 
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
    <form method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="email" name="email" placeholder="Enter your email">
      <br>
      <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>