
<?php
    include "header.php";
?>
<link rel="stylesheet" href="loginstyle.css">
    <h2 id = "login">Log In</h2>
        <div class = formContainer id = "formContainer">
        <form action = "code/loginHandler.php" method = "post"><br>
            <input type = "text" name = "name" placeholder = "Username/Email"><br>
            <input type = "password" name = "pwd" placeholder = "Password"><br>
            <button type = "submit" name = "submit" id = "button">Log In</button>
            <p id = "errors"></p>
        </form>
        </div>

<?php
    include "footer.php";
?>
