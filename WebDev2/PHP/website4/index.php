<html>
  <head>
    
  </head>
  <body>

    <?php
      $numberOfCats = $_GET['number']
    ?>

    <form method="get">
      <input type="number" name="number" value="<?php echo $numberOfCats ?>" >
      <button>Submit</button>
    </form> 

    <?php

      for($i = 1; $i <= $numberOfCats; $i++){ ?>
        Cat <?php echo $i; ?>:
        <br>
        <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" height="150" alt="cat <?php echo $i; ?>">
        <br>
    
      <?php } ?>
  </body>
</html>