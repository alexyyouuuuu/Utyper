
<?php
    include "header.php";
?>
<link rel="stylesheet" href="loginstyle.css">
    <h2>Log In</h2>
        <div class = formContainer>
        <form action = "code/loginHandler.php" method = "post"><br>
            <input type = "text" name = "name" placeholder = "Email/Username"><br>
            <input type = "password" name = "pwd" placeholder = "Password"><br>
            <button type = "submit" name = "submit">Log In</button>
            <p id = "errors"></p>
        </form>
        </div>

<?php
    include "footer.php";
?>
