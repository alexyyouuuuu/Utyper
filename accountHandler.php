<?php
if(isset($_COOKIE["userName"]))
{
    header("location: profile.php");
}
else{
    header("location: signup.php");
}
