
<?php
    include "header.php";
?>
<link rel="stylesheet" href="signupsstyle.css">
    <h2 id = "signup">Sign Up</h2>
        <div class = formContainer id = "formContainer">
        <form action = "code/signupHandler.php" method = "post"><br>
            <input type = "text" name = "name" placeholder = "Full Name"><br>
            <input type = "text" name = "email" placeholder = "Email Address"><br>
            <input type = "text" name = "uid" placeholder = "Username"><br>
            <input type = "password" name = "pwd" placeholder = "Password"><br>
            <input type = "password" name = "pwdrepeat" placeholder = "Repeat Password"><br>
            <button type = "submit" name = "submit">Sign Up</button>
            <p id = "errors"></p>
        </form>
        </div>
        <p id = "login">Already have an account?</p>
        <a href="login.php">
            <p id = "loginButton">Login here</p>
        </a>
        

<?php
    include "footer.php";
?>
