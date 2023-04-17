<?php
function createCookie($name, $value)
{
    
    
    setcookie($name, $value, time() + (86400) , "/Utyper");
}