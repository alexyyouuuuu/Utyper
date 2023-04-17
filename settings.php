<?php
    include "header.php";
?>
<link rel="stylesheet" href="settingsStyle.css">


        <div class = "divPageTitle">
            <p class = "pageTitle" id = "pageTitle">Settings</p>
        </div>
        <div class = "saveContainer">
            <a href="code/save.php">
                <div class = "saveButton" id = "saveButton">Create account default</div>
            </a>
            <div class = "saveButton" id = "default">Reset to default</div>
            <a href="code/get.php">
                <div class = "saveButton" id = "accountDefault">Display account default</div>
            </a>
        </div>
       
        
        
        <div id = "themeHeading">
            <p class = "settingSection" id = "theme">Theme</p>
        </div>
            
            <div class = "nauticalBackground" id="nauticalBackground">
                <span class ="nauticalText">Nautical</span>
            </div>
            <div class = "dimBackground" id = "dimBackground">
                <span class = "dimText">Dim</span>
            </div>
            <div class = "matrixBackground" id = "matrixBackground">
                <span class = "matrixText">Matrix</span>
            </div>
            <div class = "rasberryRoseBackground" id = "rasberryRoseBackground">
                <span class = "rasberryRoseText">Rasberry Rose</span>
            </div>
            <div class = "forestBackground" id = "forestBackground">
                <span class = "forestText">Forest</span>
            </div>
            
        <div id = "displayDiv">
            <p class = "settingSection" id = "display">Display</p>
        </div>
            <div id = "liveWPMDiv" class = "settingContainer">
                <div class = "specificSetting" id = "liveWPM">Live WPM</div>
                <div id = "liveWPMButton" class = "wpmButton"></div>
            </div>
            <div id = "livePercentDiv" class = "settingContainer">
                <div class = "specificSetting" id = "livePercent">Live Accuracy</div>
                <div id = "livePercentButton" class = "percentButton"></div>
            </div>
            <div id = "trueTypingDiv" class = "settingContainer">
                <div class = "specificSetting" id = "trueTyping">Show True Typing</div>
                <div id = "trueTypingButton" class = "trueTypingButton"></div>
            </div>
        <div id = "testDiv">
            <p class = "settingSection" id = "testSettings">Test Settings</p>
        </div>
            <div id = "noErrorDiv" class = "settingContainer">
                <div class = "specificSetting" id = "noError">No Errors</div>
                <div id = "noErrorButton" class = "noErrorButton"></div>
            </div>
            <div id = "noBackspaceDiv" class = "settingContainer">
                <div class = "specificSetting" id = "noBackspace">No Backspace</div>
                <div id = "noBackspaceButton" class = "noBackspaceButton"></div>
            </div>
            
        

<?php
    include "footer.php";
?>