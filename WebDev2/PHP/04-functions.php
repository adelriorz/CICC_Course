<?php

  # Function - just a block of code that can be repeatedly called

  /*
      - Camel Case - myFunction()
      - Lower Case - my_function()
      - Pascal Case - MyFunction() ----- used for classes
  */


//Create a simple function

function simpleFunction(){
  echo 'Hello Simple Function';
  echo '<br>';
}

simpleFunction();

// with params...

function anotherSimpleFunction($name = 'World'){
  echo 'Hello, ' . $name;
  echo '<br>';
}

anotherSimpleFunction("Derrick");
anotherSimpleFunction();


// with a return

function addNumbers($num1, $num2){
  return $num1 + $num2;
}

echo addNumbers(5,7);
echo '<br>';

// pass by value/reference

$myNum = 10;

function addFive($num){ //pass by value
  $num += 5;
}

function addTen(&$num){ //pass by reference
  $num += 10;
}

// addFive($myNum);
addTen($myNum);

echo $myNum;