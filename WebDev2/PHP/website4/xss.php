<?php

$username = $_GET['username'];

echo htmlspecialchars($username);
// echo $username; //<----- vulnerable to xss


?>


<form>
  <input type="text" name="username">
  <button>Submit</button>
</form>