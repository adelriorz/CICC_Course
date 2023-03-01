<?php
 //initialize session if it hasn't already been
 if (session_status() == PHP_SESSION_NONE) {
     session_start();
 }

 require "generate_questions.php";

// Move question tracker up one
 $_SESSION['question_number']++;

//if we're haven't started a test or completed a test
 if ($_SESSION["question_number"]>=12 || isset($_POST['play'])){
   //start a new game
   generateNewQuestionBank();
   $_SESSION["question_number"] = 1;
   $toastMessage = "Good luck!";
 }


// Keeps track of which questions have been asked
$questionNumber = $_SESSION['question_number'];

if ($questionNumber!=11){
  $questionQuestion = $_SESSION['question_bank'][$questionNumber]["question"];
  $questionAnswers = $_SESSION['question_bank'][$questionNumber]["answers"];
  // Shuffle answer buttons
  shuffle($questionAnswers);
}

//do for all questions but Q1
if ($questionNumber!=1){
  $previousAnswer = $_POST['answer'];

  // Toast correct and incorrect answers
  require "toasts.php";
  if ($previousAnswer == $_SESSION['question_bank'][$questionNumber-1]["answers"][0]){
    $toastColor = "green";
    $toastMessage = getCorrectToast();
    $_SESSION["score"]++;
  } else {
    $toastColor = "red";
    $toastMessage = GetWrongToast();
  }
}

function getFinalMessage($score){
  if ($score==10){
    return "Wow, you got everything correct!";
  } else if ($score >=7){
    return "Great work! You're doing well.";
  } else if ($score >=5){
    return "Just passed! Keep practicing to get better!";
  } else {
    return "Good effort, but you can do better!";
  }
}
