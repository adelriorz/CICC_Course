<?php

//Import the PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer.php';
require './Exception.php';
require './SMTP.php';

//declare some variables
$msg = '';
$msgClass = '';

//check for submit

if(filter_has_var(INPUT_POST, "submit")){
    //Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    //check required fields
    if(!empty($name) && !empty($email) && !empty($message)){
        //passed the required check
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            //invalid email format
            $msg = "Please use a valid email format";
            $msgClass = "alert-danger";
        }else{
            //valid email format

            //instaitate the PHPMailer
            $mail = new PHPMailer(true); // enables exceptions

            try {
                $mail = new PHPMailer(true);
                $mail->isSMTP();
                $mail->Host = 'smtp.ethereal.email';
                $mail->SMTPAuth = true;
                $mail->Username = 'irving92@ethereal.email';
                $mail->Password = '1EeJY1acfuyQD2Eu74';
                $mail->SMTPSecure = 'tls';
                $mail->Port = 587;

                //recipients
                $mail->setFrom('donotreply@exampl.com','DO NOT REPLY');
                $mail->addAddress($email);
                $mail->addReplyTo('info@example.com', 'Information');

                //Contents
                $mail->isHTML();
                $mail->Subject = 'Contact request form from '. $name;
                $mail->Body = "<h2>Contact Request</h2>
                    <h4>Name</h4><p>". $name ."</p>
                    <h4>Email</h4><p>". $email ."</p>
                    <h4>Message</h4><p>". $message ."</p>
                    ";

                $mail->send();

                $msg = 'Your email has been sent';
                $msgClass = 'alert-success';
            }catch(Exception $e){
                $msg = 'Your email was not sent';
                $msgClass = 'alert-danger';
            }
        }
    }else{
        //failed the required check
        $msg = 'Please fill in all fields';
        $msgClass = 'alert-danger';
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <?php if ($msg != '') : ?>
            <div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
        <?php endif ?>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" name="name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" name="email">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea class="form-control" name="message">
            </textarea>
            </div>
            <div class="form-group">
                <button name="submit" type="submit">Submit</button>
            </div>
        </form>
    </div>
  <script></script>
</body>

</html>