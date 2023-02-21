<h1>
  <?php
    echo "HI!";
  ?>
</h1>
<!-- HTML Comment -->

<?php
// this is a single line PHP comment
# this is a single line PHP comment

/* this is a multiline PHP comment

Variables

  - Prefix $
  - Start with a letter or an underscore
  - Only letters, numbers and underscore  
  - Case sensitive

Data Types
  - String
  - Integers
  - Float
  - Booleans
  - Arrays
  - Objects
  - NULL
  - Resource - a return or reference to a function (not an actual datatype)
*/


$output1 = "Guten Tag!\n";
// echo $output1;
echo nl2br($output1);

$output2 = 'Guten Morgen!';
echo $output2;

echo '<br>';

$num1 = 4;
$float1 = 3.2;
$bool1 = true;
$sum = $num1 + $float1;
echo $sum;

echo '<br>';

$string1 = 'Guten';
$string2 = 'Abend';
echo $string1 . ' ' . $string2;

echo '<br>';

$greeting = 'They\'re here';
echo $greeting;

echo '<br>';

#Constant 
define('HOLA', 'hola cola');
echo HOLA;





  