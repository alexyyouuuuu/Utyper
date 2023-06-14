function checkSignupError(page)
{
    var errorDiv = document.getElementById("errors");
    if(page.includes("emptyinput"))
        {errorDiv.innerHTML = "Fill all fields!";}
    else if(page.includes("invaliduser"))
        {errorDiv.innerHTML =  "Invalid Username";}
    else if(page.includes("invalidemail"))
        {errorDiv.innerHTML =  "Invalid Email";}
    else if(page.includes("passwordlength"))
        {errorDiv.innerHTML =  "Password must be 8 characters long";}
    else if(page.includes("passwordmatch"))
        {errorDiv.innerHTML =  "Passwords do not match";}
    else if(page.includes("usernametaken"))
        {errorDiv.innerHTML =  "Username already taken";}
    else if(page.includes("emailtaken"))
        {errorDiv.innerHTML =  "Email already used";}
    else if(page.includes("success"))
        {errorDiv.innerHTML =  "Success!";}
}
function checkLoginError(page)
{   
    var errorDiv = document.getElementById("errors");
    if(page.includes("error"))
        {errorDiv.innerHTML = "Invalid username/email or password";}
}
function signOut()
{
    document.cookie = "userId=false; expires=Thu, 18 Dec 2013 12:00:00 UTC;"
    document.cookie = "userName=false; expires=Thu, 18 Dec 2013 12:00:00 UTC;"
    window.location.href="index.php";
}

