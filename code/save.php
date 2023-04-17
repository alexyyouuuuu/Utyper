<?php
include_once "dbhHandler.php";


if(!isset($_COOKIE["userId"]) || !isset($_COOKIE["userName"]))
{
    header("location: ../settings.php?error=nologin");
    exit();
}
$id = $_COOKIE["userId"];
$theme = $_COOKIE["theme"];
$wpm = $_COOKIE["wpm"];
$percent = $_COOKIE["percent"];
$truetyping = $_COOKIE["truetyping"];
$error = $_COOKIE["error"];
$backspace = $_COOKIE["backspace"];
$settings = $theme.",".$wpm.",".$percent.",".$truetyping.",".$error.",".$backspace;

$sql = "UPDATE users SET userSettings = ? WHERE userId = ?";
    
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $sql))
{
    header ("location: ../signup.php/?error=stmtfailed");
    exit();
}
else{
    mysqli_stmt_bind_param($stmt, "ss", $settings, $id);

    //run parameters inside database
    mysqli_stmt_execute($stmt);
    $stmt->close();
}
header("location: ../settings.php?error=saved");


   
