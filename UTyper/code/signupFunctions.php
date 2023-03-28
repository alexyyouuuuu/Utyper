<?php

$result;
function emptyInputs($name, $email, $username, $password, $passwordRepeat)
{
    if(empty($name) || empty($email) || empty($username) || empty($password) || empty($passwordRepeat))
        {$result = true;}
    else
        {$result = false;}
    return $result;
}
function invalidUser($username)
{
    if(!preg_match("/^[a-zA-z0-9]*$/", $username))
        {$result = true;}
    else
        {$result = false;}
    return $result;
}
function invalidEmail($email)
{
    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {$result = true;}
    else
        {$result = false;}
    return $result;
}
function passwordMatch($password, $passwordRepeat)
{
    if($password !== $passwordRepeat)
        {$result = true;}
    else
        {$result = false;}
    return $result;
}
function userExists($conn, $username)
{
    $sql = "SELECT * FROM users WHERE userUid = ?";
    $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql))
        {
            header ("location: ../signup.php/?error=stmtfailed");
            exit();
        }
        else{
            mysqli_stmt_bind_param($stmt, "s", $username);

            mysqli_stmt_execute($stmt);
            $resultData = mysqli_stmt_get_result($stmt);
        }
        if(mysqli_fetch_assoc($resultData))
        {
            mysqli_stmt_close($stmt); 
            $result = true;
            return $result;
        }
        else
        {
            mysqli_stmt_close($stmt); 
            $result = false;
            return $result;
        }
}
function emailExists($conn, $email)
{
    $sql = "SELECT * FROM users WHERE userEmail = ?";
    $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql))
        {
            header ("location: ../signup.php/?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "s", $email);

        mysqli_stmt_execute($stmt);
        $resultData = mysqli_stmt_get_result($stmt);

        if(mysqli_fetch_assoc($resultData))
        {
            mysqli_stmt_close($stmt); 
            $result = true;
            return $result;
        }
        else
        {
            mysqli_stmt_close($stmt); 
            $result = false;
            return $result;
        }
          
}
function createUser($conn, $name, $email, $username, $password)
{
    $sql = "INSERT INTO users(userName, userEmail, userUid, userPwd, userSettings) VALUES(?, ?, ?, ?, ?);"; 
        
    $stmt = mysqli_stmt_init($conn);

    if(!mysqli_stmt_prepare($stmt, $sql))
    {
        header ("location: ../signup.php/?error=stmtfailed");
        exit();
    }
    $settings = "";
    $hashedpwd = password_hash($password, PASSWORD_DEFAULT);
    mysqli_stmt_bind_param($stmt, "sssss", $name, $email, $username, $hashedpwd, $settings);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt); 
    header("location: ../signup.php?error=success");     
    exit();
  
    
}


