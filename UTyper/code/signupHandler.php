<?php
include_once "signupFunctions.php";
include_once "dbhHandler.php";

    if (!isset($_POST['submit']))
    {
        header("Location: ../signup.php?error=nosubmit");
        exit();
    }
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['uid'];
    $password = $_POST['pwd'];
    $passwordRepeat = $_POST["pwdrepeat"];

    if(emptyInputs($name, $email, $username, $password, $passwordRepeat) !== false)
    {
        header("Location: ../signup.php?error=emptyinput");
        exit();
    }
    else if(invalidUser($username) !== false)
    {
        header("Location: ../signup.php?error=invaliduser");
        exit();
    }
    else if(invalidEmail($email) !== false)
    {
        header("location: ../signup.php?error=invalidemail");
        exit();
    }
    else if(strlen($password) < 8)
    {
        header("location: ../signup.php?error=passwordlength");
        exit();
    }
    else if(passwordMatch($password, $passwordRepeat))
    {
        header("location: ../signup.php?error=passwordmatch");
        exit();
    }
    else if(userExists($conn, $username))
    {
        header("location: ../signup.php?error=usernametaken");
        exit();
    }
    else if(emailExists($conn, $email))
    {
        header("location: ../signup.php?error=emailtaken");
        exit();
    }
    
    
    createUser($conn, $name, $email, $username, $password);
    
    
    
   
   