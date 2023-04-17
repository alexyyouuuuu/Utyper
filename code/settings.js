function changeTheme(theme)
{
    //alert("change theme")
    if(theme === "nautical")
    {
        console.log("nautical");
        background_color = "rgb(11, 4, 28)";
        light_bg_color = "rgb(60, 20, 87)";
        title_color = "rgb(255, 221, 0)";
        text_color = "rgb(101, 101, 209)";
        alt_text_color = "rgb(255,255,255)";
        current_theme = "nautical";
        document.cookie =  "theme=nautical";
    }
    else if(theme === "dim")
    {
        //alert("dim");
        background_color = "rgb(182, 181, 181)";
        light_bg_color = "rgb(200, 200, 200)";
        title_color = "rgb(0, 0, 0)";
        text_color = "rgb(101, 101, 101)";
        alt_text_color = "rgb(255,255,255)";
        current_theme = "dim";
        document.cookie =  "theme=dim";
    }
    else if (theme === "matrix")
    {
        background_color = "rgb(0, 0, 0)";
        light_bg_color = "rgb(13, 33, 18)";
        title_color = "rgb(21, 209, 40)";
        text_color = "rgb(3, 84, 11)";
        alt_text_color = "rgb(7,224,28)";
        current_theme = "matrix";
        document.cookie =  "theme=matrix";
    }
    else if(theme === "rasberry rose")
    {
        background_color = "rgb(184, 51, 106)";
        light_bg_color = "rgb(200, 80, 150)";
        title_color = "rgb(110, 175, 239)";
        text_color = "rgb(125, 140, 196)";
        alt_text_color = "rgb(160, 210, 219)";
        document.cookie =  "theme=rasberryrose";;
    }
    else if(theme === "forest")
    {
        background_color = "rgb(25,39,13)";
        light_bg_color = "rgb(89,58,14)";
        title_color = "rgb(37,89,31)";
        text_color = "rgb(114,96,27)";
        alt_text_color = "rgb(129,140,60)";
        document.cookie =  "theme=forest";
    }
    colorDivsSettings();
}

function changeDisplaySetting(setting)
{
    if(setting === "wpm")
    {
        liveWPM = !liveWPM;
        document.cookie = "wpm="+liveWPM;
        if(liveWPM){liveWPMButton.innerHTML = "ON";}
        else{liveWPMButton.innerHTML = "OFF";}
    }
    else if(setting === "percent")
    {
        livePercent = !livePercent;
        document.cookie = "percent="+livePercent;
        if(livePercent){livePercentButton.innerHTML = "ON";}
        else{livePercentButton.innerHTML = "OFF";}
    }
    else if(setting === "true typing")
    {
        trueTyping = !trueTyping;
        document.cookie = "truetyping="+trueTyping;
        if(trueTyping){trueTypingButton.innerHTML = "ON";}
        else{trueTypingButton.innerHTML = "OFF";}
    }
}

function changeTestSetting(setting)
{
    if(setting === "no error")
    {
        
        noError = !noError;
        document.cookie = "error="+noError;
        if(noError){noErrorButton.innerHTML = "ON";}
        else{noErrorButton.innerHTML = "OFF";}
        //alert(document.cookie);
    }
    if(setting === "no backspace")
    {
        noBackspace = !noBackspace;
        document.cookie = "backspace="+noBackspace;
        if(noBackspace){noBackspaceButton.innerHTML = "ON";}
        else{noBackspaceButton.innerHTML = "OFF";}
    }
    
}
function setDefaultSettings()
{
    document.cookie = "theme=nautical"; 
    document.cookie = "wpm=false"; 
    document.cookie = "percent=false"; 
    document.cookie = "truetyping=false"; 
    document.cookie = "error=false"; 
    document.cookie = "backspace=false"; 

    current_theme = nautical;
    liveWPM = false;
    livePercent = false;
    trueTyping = false;
    noError = false;
    noBackspace = false;
    
    liveWPMButton.innerHTML = "OFF";
    livePercentButton.innerHTML = "OFF";
    trueTypingButton.innerHTML = "OFF";
    noErrorButton.innerHTML = "OFF";
    noBackspaceButton.innerHTML = "OFF";
    
    changeTheme("nautical");
}