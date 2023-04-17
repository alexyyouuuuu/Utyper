<?php
include_once "loginFunctions.php";
include_once "dbhHandler.php";

    $name = $_POST['name'];
    $password = $_POST['pwd'];

    if (!isset($_POST['submit']))
    {
        header("Location: ../login.php?error=nosubmit");
        exit();
    }
    if(loginemptyInputs($name, $password) !== false)
    {
        header("Location: ../login.php?error=emptyinput");
        exit();
    }
    login($conn, $name, $password);
   
    
    
    
   
   