<?php 
    include_once "dbhHandler.php";
    include_once "setCookie.php";
    if(!isset($_COOKIE["userId"]) || !isset($_COOKIE["userName"]))
    {
        header("location: ../settings.php?error=nologin");
        exit();
    }
    $id = $_COOKIE["userId"];
    $results = getSettings($id, $conn);
    
    $array = explode(",",$results);
    //echo $results;
    
    $theme = $array[0];
    $wpm = $array[1];
    $percent = $array[2];
    $truetyping = $array[3];
    $error = $array[4];
    $backspace = $array[5];
    
    header("location: ../settings.php?set=".$theme.",".$wpm.",".$percent.",".$truetyping.",".$error.",".$backspace);
    exit();

    
    function getSettings($id, $conn)
    {
        
        $sql = "SELECT * FROM users WHERE userId=?"; 
        $stmt = $conn->prepare($sql); 
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $result = $stmt->get_result(); 
        $resultData = $result->fetch_assoc();
        
        
        
        $settings = $resultData['userSettings'];
        
        
        
        return $settings;

    }
