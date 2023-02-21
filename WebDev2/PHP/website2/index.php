<?php include 'server-info.php' ?>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>

  <body>
    <div class="container">
      <?php if($server): ?>
        <ul class="list-group">
          <?php foreach($server as $key => $value): ?>
            <li class="list-group-item">
              <b><?php echo $key; ?></b>
              <?php echo $value; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php else: ?>
        <h2>No Test</h2>  
      <?php endif; ?>
    </div>
  </body>
</html>