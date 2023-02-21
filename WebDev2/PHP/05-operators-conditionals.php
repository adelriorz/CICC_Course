<?php

/*

  Operators

  - Arithmetic
      Binary ----->  +, -, *, /, %
      Unary -----> ++, --
  - Comparison
      ==, ===, !=, !==, <, >, <=, >=, <=>
  - Logical
      &&, ||, XOR
  - Assignment
      Basic ---> =
      Combined ---> +=, -=, *=, /=, %=

*/

/*
  Spaceship operator (<=>) 

  --->    1 (if first expression is greater than the second expression)
  --->    -1 (if first expression is lesser than the second expression)
  --->    0 (if first expression is equal to the second expression)
*/


#----Integers
echo (1<=>1) . '<br>';
echo (1<=>2) . '<br>';
#----Float
echo (1.5<=>2.5) . '<br>';
#----String
echo ("a"<=>"A") . '<br>';
echo ("a"<=>"a") . '<br>';
echo ("a"<=>"z") . '<br>';

echo '<hr>';

$num = 6;

if($num == 5){
  echo '5 passed';
}else if($num == 6){
  echo '6 passed';
}else {
  echo 'something else..';
}

echo '<hr>';


$favColor = "black";

switch($favColor){
  case 'red':
    echo 'Your favorite color is red';
    break;
  case 'blue':
    echo 'Your favorite color is blue';
    break;
  case 'yellow':
    echo 'Your favorite color is yellow';
    break;
  default:
    echo 'You dont have a favorite color';
}
