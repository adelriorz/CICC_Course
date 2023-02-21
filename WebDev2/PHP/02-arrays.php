<?php

  /* Array - variable that hold multiple values

            - Indexed
            - Associative
            - Multi-dimensional
  */


# Indexed

$people1 = array('Kevin','Jeremy','Tim');
$people2 = ['Kevin','Jeremy','Tim'];
$people1[3] = 'Cherry';

// echo $people1; //prints datatype
echo count($people1); //prints the length
echo '<hr>';
print_r($people1); //prints the array with index and value
echo '<hr>';
var_dump($people2); //prints index/datatype/value
echo '<hr>';

#Associative - allows you to define the key and the value
$peopleAssoc = array('Brad' => 35, 'Joseph' => 22, 'William' => 37);
$ids = [22 => 'Brad', 44 => 'Joseph', 65 => 'William'];
$ids = [0 => 'Brad', 1 => 'Joseph', 2 => 'William'];

print_r($peopleAssoc);
echo '<hr>';
echo $ids[2];
echo '<hr>';
echo count($ids);
echo '<hr>';

#Multi-dimensional - nested array
$cars = array(
  array('Honda', 20, 5), //name/sold/available
  array('Toyota', 10, 3),
  array('Ford', 4, 3)
);

echo $cars[2][1];