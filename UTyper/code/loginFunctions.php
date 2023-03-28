<?php
include_once "signupFunctions.php";
function loginemptyInputs($name,$password)
{
    if(empty($name) || empty($password))
        {$result = true;}
    else
        {$result = false;}
    return $result;
}
function login($conn, $name, $password)
{
    $uidExists = userExists($conn, $name);
    $emailExists = emailExists($conn, $name);
    if($uidExists === false && $emailExists === false)
    {
        header("location: ../login.php?error=error");
        exit();
    }
   
    $sql = "SELECT * FROM users WHERE userUid=? OR userEmail=?"; // SQL with parameters
    $stmt = $conn->prepare($sql); 
    $stmt->bind_param("ss", $name, $name);
    $stmt->execute();
    $result = $stmt->get_result(); // get the mysqli result
    $resultData = $result->fetch_assoc(); // fetch data  
    $pwdHashed = $resultData['userPwd'];
    

    $checkPwd = password_verify($password, $pwdHashed);
    if($checkPwd === false)
    {
        header("location: ../login.php?error=error");
        exit();
    }
    else if($checkPwd === true)
    {
        header("location: ../index.php");
    }
}