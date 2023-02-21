<?php

  /*

      # LOOPS

      - For
      - While
      - Do..While
      - Foreach

  */


# For loops 
# @params - init, condition, incr/decr

for($i =0; $i < 10; $i++){
  echo($i . '<br>');
}

echo '<hr>';

# While loop
# @param - condition

$x = 0;

while($x < 10){
  echo $x;
  $x++;
}

echo '<hr>';
# Do..While
# @param - condition // do will always run once

$y = 0;

do {
  echo $y;
  $y++;
}
while($y < 10);

echo '<hr>';

# Foreach loop

$people = array('Kevin','Jeremy','Tim');
foreach($people as $person){
  echo $person . '<br>';
}

echo '<hr>';

$peopleAssoc = array('Brad' => 35, 'Joseph' => 22, 'William' => 37);
foreach($peopleAssoc as $person => $age){
  echo $person . ' is ' . $age . ' years old <br>';
}