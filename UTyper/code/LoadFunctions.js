    

//alert("hello");
if (!localStorage.current_theme)
{
    localStorage.current_theme = "nautical";
    current_theme = "nautical";
}
else{
    current_theme = localStorage.current_theme;
}
if (!localStorage.wpm)
{
    localStorage.wpm = "false";
    liveWPM = false;
}
else{
    if(localStorage.wpm === "true"){liveWPM = true}
    else{liveWPM=false}
}
if (!localStorage.percent)
{
    localStorage.percent = "false";
    livePercent = false;
}
else{
    if(localStorage.percent === "true"){livePercent = true}
    else{livePercent=false}
}
if (!localStorage.trueTyping)
{
    localStorage.trueTyping = "false";
    trueTyping = false;
}
else{
    if(localStorage.trueTyping === "true"){trueTyping = true}
    else{trueTyping=false}
}
if (!localStorage.noError)
{
    localStorage.noError = "false";
    noError = false;
}
else{
    if(localStorage.noError === "true"){noError = true}
    else{noError=false}
}
if (!localStorage.noBackspace)
{
    localStorage.noBackspace = "false";
    noBackspace = false;
}
else{
    if(localStorage.noBackspace === "true"){noBackspace = true}
    else{noBackspace=false}
}
if(!localStorage.target1){localStorage.target1 = " "}
else{ target_characters[0] = localStorage.target1}
if(!localStorage.target2){localStorage.target2 = " "}
else{ target_characters[1] = localStorage.target2}
if(!localStorage.target3){localStorage.target3 = " "}
else{ target_characters[2] = localStorage.target3}
if(!localStorage.target4){localStorage.target4 = " "}
else{ target_characters[3] = localStorage.target4}
if(!localStorage.target5){localStorage.target5 = " "}
else{ target_characters[4] = localStorage.target5}
//current_theme = "sunset";
if(current_theme === "nautical")
{
    //alert("nautical");
    background_color = "rgb(11, 4, 28)";
    light_bg_color = "rgb(60, 20, 87)";
    title_color = "rgb(255, 221, 0)";
    text_color = "rgb(101, 101, 209)";
    alt_text_color = "rgb(255,255,255)";
}
else if(current_theme === "dim")
{
    //alert("dim");
    background_color = "rgb(182, 181, 181)";
    light_bg_color = "rgb(200, 200, 200)";
    title_color = "rgb(0, 0, 0)";
    text_color = "rgb(101, 101, 101)";
    alt_text_color = "rgb(255,255,255)";
}
else if(current_theme === "matrix")
{
    //alert("matrix");
    background_color = "rgb(0, 0, 0)";
    light_bg_color = "rgb(13, 33, 18)";
    title_color = "rgb(21, 209, 40)";
    text_color = "rgb(20, 100, 30)";
    alt_text_color = "rgb(7,224,28)";
}
else if(current_theme === "rasberry rose")
{
    background_color = "rgb(184, 51, 106)";
    light_bg_color = "rgb(200, 80, 150)";
    title_color = "rgb(110, 175, 239)";
    text_color = "rgb(125, 140, 196)";
    alt_text_color = "rgb(160, 210, 219)";
}
else if(current_theme === "forest")
{
    background_color = "rgb(25,39,13)";
    light_bg_color = "rgb(89,58,14)";
    title_color = "rgb(37,89,31)";
    text_color = "rgb(114,96,27)";
    alt_text_color = "rgb(129,140,60)";
}
else if(current_theme === "sunset")
{
    background_color = "rgb(95, 15, 64)";
    light_bg_color = "rgb(15, 76, 92)";
    title_color = "rgb(251, 139, 36)";
    text_color = "rgb(154, 3, 30)";
    alt_text_color = "rgb(227, 100, 20)";
}

function loadAll()
{
    //console.log("Hello world!");
    //alert(background_color);
    //alert(current_theme);
    background_color_divs = [];
    lightbg_color_divs = [];
    title_color_divs = [];
    text_color_divs = [];
    alt_text_color_divs = [];
    var page = document.location.href;
    //alert(page);
    if(page.includes("settings"))
    {
        //alert("settings");
        
        current_page = "settings";
        background_color_divs.push(document.getElementById("body"));
        text_color_divs.push(document.getElementById("theme"));
        text_color_divs.push(document.getElementById("display"));
        text_color_divs.push(document.getElementById("testSettings"));
        alt_text_color_divs.push(document.getElementById("liveWPMButton"));
        alt_text_color_divs.push(document.getElementById("livePercentButton"));
        alt_text_color_divs.push(document.getElementById("liveWPM"));
        alt_text_color_divs.push(document.getElementById("livePercent"));
        alt_text_color_divs.push(document.getElementById("noErrorDiv"));
        alt_text_color_divs.push(document.getElementById("noErrorButton"));
        alt_text_color_divs.push(document.getElementById("noBackspaceButton"));
        alt_text_color_divs.push(document.getElementById("noBackspaceDiv"));
        alt_text_color_divs.push(document.getElementById("trueTypingDiv"));
        alt_text_color_divs.push(document.getElementById("trueTypingButton"));
        title_color_divs.push(document.getElementById("title"));
        title_color_divs.push(document.getElementById("pageTitle"));
        
        //lightbg_color_divs.push(document.getElementById("modes"));
        dim = document.getElementById("dimBackground");
        nautical = document.getElementById("nauticalBackground");
        matrix = document.getElementById("matrixBackground");
        rasberryRose = document.getElementById("rasberryRoseBackground");
        forest = document.getElementById("forestBackground");
        liveWPMButton = document.getElementById("liveWPMButton");
        livePercentButton = document.getElementById("livePercentButton");
        noErrorButton = document.getElementById("noErrorButton");
        noBackspaceButton = document.getElementById("noBackspaceButton");
        trueTypingButton = document.getElementById("trueTypingButton");

        livePercentButton.style.border = "3px solid "+ background_color;
        liveWPMButton.style.border = "3px solid "+ background_color;
        noErrorButton.style.border = "3px solid "+ background_color;
        noBackspaceButton.style.border = "3px solid "+ background_color;
        trueTypingButton.style.border = "3px solid "+ background_color;

        lightbg_color_divs.push(livePercentButton);
        lightbg_color_divs.push(liveWPMButton);
        lightbg_color_divs.push(noErrorButton);
        lightbg_color_divs.push(noBackspaceButton);
        lightbg_color_divs.push(trueTypingButton);
        if(livePercent){livePercentButton.innerHTML = "ON";}
        else{livePercentButton.innerHTML = "OFF";}
        if(liveWPM){liveWPMButton.innerHTML = "ON";}
        else{liveWPMButton.innerHTML = "OFF";}
        if(noError){noErrorButton.innerHTML = "ON";}
        else{noErrorButton.innerHTML = "OFF";}
        if(noBackspace){noBackspaceButton.innerHTML = "ON";}
        else{noBackspaceButton.innerHTML = "OFF";}
        if(trueTyping){trueTypingButton.innerHTML = "ON";}
        else{trueTypingButton.innerHTML = "OFF";}
        //alert(localStorage.wpm);
        //alert(localStorage.percent);
        dim.addEventListener("click", function(){changeTheme("dim")});
        nautical.addEventListener("click", function(){changeTheme("nautical")});
        matrix.addEventListener("click", function(){changeTheme("matrix")});
        rasberryRose.addEventListener("click", function(){changeTheme("rasberry rose")});
        forest.addEventListener("click", function(){changeTheme("forest")});
        livePercentButton.addEventListener("click", function(){changeDisplaySetting("percent")});
        liveWPMButton.addEventListener("click", function(){changeDisplaySetting("wpm")});        
        noErrorButton.addEventListener("click", function(){changeTestSetting("no error")});        
        noBackspaceButton.addEventListener("click", function(){changeTestSetting("no backspace")});
        trueTypingButton.addEventListener("click", function(){changeDisplaySetting("true typing")});       
        
    }
    else if(page.includes("letters"))
    {
        current_page = "letters";

        prompt_div = document.getElementById("prompt");
        next_button = document.getElementById("next");
        button_40 = document.getElementById("40");
        button_20 = document.getElementById("20");
        button_10 = document.getElementById("10");
        button_quote = document.getElementById("quote");
        wpm_div=document.getElementById("wpm");
        accuracy_div=document.getElementById("accuracy");

        background_color_divs.push(document.getElementById("body"));
        background_color_divs.push(document.getElementById("prompt"));        
        text_color_divs.push(document.getElementById("words"));
        text_color_divs.push(document.getElementById("10"));
        text_color_divs.push(document.getElementById("20"));
        text_color_divs.push(document.getElementById("40"));
        text_color_divs.push(document.getElementById("timer"));
        text_color_divs.push(document.getElementById("wpm"));
        text_color_divs.push(document.getElementById("accuracy"));
        title_color_divs.push(document.getElementById("title"));
        title_color_divs.push(document.getElementById("next"));
        lightbg_color_divs.push(document.getElementById("modes"));
        
        window.addEventListener("click", function(event){windowClick(event)});
        prompt_div.addEventListener("click", function(event){inputClick()})
        window.addEventListener("keydown", function(event){checkKeyDown(event)})
        button_10.addEventListener("click", function(){changeWordCount(10)})
        button_20.addEventListener("click", function(){changeWordCount(20)})
        button_40.addEventListener("click", function(){changeWordCount(40)})
        next_button.addEventListener("click", function(){next()})
        loadLetters(total_word_length);
    }
    else if (page.includes("targetTyping"))
    {
        current_page = "targetTyping";
        targets = document.getElementById("targets");
        targets.innerHTML = "targets: ";
        for (let i = 0; i < 5; i++)
        {
            if (target_characters[i] !== " ")
            {
                targets.innerHTML = targets.innerHTML + target_characters[i] + ", ";
            }
        }
        prompt_div = document.getElementById("prompt");
        next_button = document.getElementById("next");
        button_40 = document.getElementById("40");
        button_20 = document.getElementById("20");
        button_10 = document.getElementById("10");
        button_quote = document.getElementById("quote");
        wpm_div=document.getElementById("wpm");
        accuracy_div=document.getElementById("accuracy");
        background_color_divs.push(document.getElementById("body"));
        background_color_divs.push(document.getElementById("prompt"));        
        text_color_divs.push(document.getElementById("words"));
        text_color_divs.push(document.getElementById("10"));
        text_color_divs.push(document.getElementById("20"));
        text_color_divs.push(document.getElementById("40"));
        text_color_divs.push(document.getElementById("timer"));
        text_color_divs.push(document.getElementById("wpm"));
        text_color_divs.push(document.getElementById("accuracy"));
        title_color_divs.push(document.getElementById("title"));
        title_color_divs.push(document.getElementById("next"));
        title_color_divs.push(document.getElementById("targets"));
        lightbg_color_divs.push(document.getElementById("modes"));
        lightbg_color_divs.push(document.getElementById("targets"));
        window.addEventListener("click", function(event){windowClick(event)});
        prompt_div.addEventListener("click", function(event){inputClick()})
        window.addEventListener("keydown", function(event){checkKeyDown(event)})
        button_10.addEventListener("click", function(){changeWordCount(10)})
        button_20.addEventListener("click", function(){changeWordCount(20)})
        button_40.addEventListener("click", function(){changeWordCount(40)})
        next_button.addEventListener("click", function(){next()})
        loadTarget(total_word_length);
    }
    else if (page.includes("target"))
    {
        current_page = "target";
        localStorage.target1 = " ";
        localStorage.target2 = " ";
        localStorage.target3 = " ";
        localStorage.target4 = " ";
        localStorage.target5 = " ";
        target_characters = [" ", " ", " ", " ", "  "]
        window.addEventListener("click", function(event){targetClick(event)});
        window.addEventListener("keydown", function(event){targetKeyDown(event)});
        target1 = document.getElementById("target1");
        target2 = document.getElementById("target2");
        target3 = document.getElementById("target3");
        target4 = document.getElementById("target4");
        target5 = document.getElementById("target5");
        title_color_divs.push(document.getElementById("title"));
        title_color_divs.push(document.getElementById("instructions"));
        background_color_divs.push(document.getElementById("body"));
        lightbg_color_divs.push(document.getElementById("target1"));
        lightbg_color_divs.push(document.getElementById("target2"));
        lightbg_color_divs.push(document.getElementById("target3"));
        lightbg_color_divs.push(document.getElementById("target4"));
        lightbg_color_divs.push(document.getElementById("target5"));
        title_color_divs.push(document.getElementById("target1"));
        title_color_divs.push(document.getElementById("target2"));
        title_color_divs.push(document.getElementById("target3"));
        title_color_divs.push(document.getElementById("target4"));
        title_color_divs.push(document.getElementById("target5"));

        continue_Button = document.getElementById("continueButton");
        continue_Button.style.border = "3px solid "+title_color;
        title_color_divs.push(continue_Button);
        

    }
    
    else if(page.includes("signup"))
    {
        //alert("signup");
        background_color_divs.push(document.getElementById("body"));
        lightbg_color_divs.push(document.getElementById("formContainer"));
        title_color_divs.push(document.getElementById("title"));
        alt_text_color_divs.push(document.getElementById("errors"));
        text_color_divs.push(document.getElementById("signup"));
        text_color_divs.push(document.getElementById("login"));
        text_color_divs.push(document.getElementById("loginButton"));
        var inputs = document.getElementsByTagName("input");
        for(var element of inputs)
        {
            background_color_divs.push(element);
        }

        checkSignupError(page);
    }
    else if(page.includes("login"))
    {
        //alert("signup");
        background_color_divs.push(document.getElementById("body"));
        title_color_divs.push(document.getElementById("title"));
        checkLoginError(page);
    }
    else{
        //alert("index")
        prompt_div = document.getElementById("prompt");
        button = document.getElementById("buttonButton");
        test_text = document.getElementById("testingText");
        next_button = document.getElementById("next");
        button_40 = document.getElementById("40");
        button_20 = document.getElementById("20");
        button_10 = document.getElementById("10");
        button_quote = document.getElementById("quote");
        wpm_div=document.getElementById("wpm");
        accuracy_div=document.getElementById("accuracy");

        current_page = "index";
        background_color_divs.push(document.getElementById("body"));
        background_color_divs.push(document.getElementById("prompt"));        
        text_color_divs.push(document.getElementById("words"));
        text_color_divs.push(document.getElementById("10"));
        text_color_divs.push(document.getElementById("20"));
        text_color_divs.push(document.getElementById("40"));
        text_color_divs.push(document.getElementById("quote"));
        text_color_divs.push(document.getElementById("timer"));
        text_color_divs.push(document.getElementById("wpm"));
        text_color_divs.push(document.getElementById("accuracy"));
        title_color_divs.push(document.getElementById("title"));
        title_color_divs.push(document.getElementById("next"));
        lightbg_color_divs.push(document.getElementById("modes"));
        
        window.addEventListener("click", function(event){windowClick(event)});
        prompt_div.addEventListener("click", function(event){inputClick()});
        window.addEventListener("keydown", function(event){checkKeyDown(event)});
        button_10.addEventListener("click", function(){changeWordCount(10)});
        button_20.addEventListener("click", function(){changeWordCount(20)});
        button_40.addEventListener("click", function(){changeWordCount(40)});
        button_quote.addEventListener("click", function(){nextQuote()});
        next_button.addEventListener("click", function(){next()});
        loadWords(total_word_length);
    }
    colorDivs();
}
function loadLetters(words)
{
    total_word_length = words;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 1; i <= total_word_length; i++ )
    {
        var wordLength = Math.floor(Math.random()*5)+2;
        for (let i = 1; i <= wordLength; i++)
        {
            var character_chosen = alphabet.charAt(Math.floor(Math.random()*26));
            word_list = word_list + character_chosen;
        }
        word_list = word_list + " ";
    }
    setText();
}
async function loadTarget(words)
{
    total_word_length = words;
    var target_character_arrays = [];
    for (var i = 0; i < 5; i++)
    {
        if (target_characters[i] === " "){}
        else
        {
            var letter = target_characters[i];
            var file_name = "letterfiles/" + letter + ".txt";
            var file_return = await readFile(file_name);
            var target_array = file_return.split(/\r?\n/)
            target_character_arrays.push(target_array);
            
        }
    }
    var splits = 100/target_character_arrays.length;
    for(let i = 1; i <= total_word_length; i++ )
    {
        var list_random = Math.floor(Math.random()*100);
        var word;
        if (list_random < splits){
            word = target_character_arrays[0][Math.floor(Math.random()*target_character_arrays[0].length)];
        }
        else if (list_random < splits * 2){
            word = target_character_arrays[1][Math.floor(Math.random()*target_character_arrays[1].length)];
        }
        else if (list_random < splits * 3){
            word = target_character_arrays[2][Math.floor(Math.random()*target_character_arrays[2].length)];
        }
        else if (list_random < splits * 4){
            word = target_character_arrays[3][Math.floor(Math.random()*target_character_arrays[3].length)];
        }
        else{
            word = target_character_arrays[4][Math.floor(Math.random()*target_character_arrays[4].length)];
        }
        
        word_list = word_list + word + " ";
    }
    setText();
}
/*
function loadTarget2(txt, words)
{
    wordsArray = txt.split(/\r?\n/);
    total_word_length = words;
    var word_count = 0;
    while(word_count <= total_word_length)
    {
        var word = wordsArray[Math.floor(Math.random()*wordsArray.length)];
        if (word.includes(target_characters[0]) || word.includes(target_characters[1]) || word.includes(target_characters[2]) || word.includes(target_characters[3]) || word.includes(target_characters[4]))
        {
            word_list = word_list + word + " ";
            word_count++
        }
    }    
    setText();
}
*/
async function loadWords(words)
{
    t100_txt = await readFile("textFiles/t100common.txt"); 
    common_txt = await readFile("textFiles/common.txt"); 
    superCommon_txt = await readFile("textFiles/supercommon.txt"); 
    chooseWords(words);
    
}
async function readFile(file) {
    return fetch(file)
        .then((response)=>response.text())
        .then((text)=>{return text});
}

function loadQuote()
{
    var txt="";
    fetch("textFiles/quotes.txt")
        .then(response => response.text())
        .then(text => setQuote(text));
}
function chooseWords(words)
{
    total_word_length = words;
    var t100Array = t100_txt.split(/\r?\n/);
    var superCommonArray = superCommon_txt.split(/\r?\n/);
    var commonArray = common_txt.split(/\r?\n/);
    for(let i = 1; i <= total_word_length; i++ )
    {
        var fileRandom = Math.floor(Math.random()*100);
        var word;
        if (fileRandom > 50){
            //alert("t100");
            word = t100Array[Math.floor(Math.random()*t100Array.length)];
        }
        else if (fileRandom > 5){
            //alert("super common");
            word = superCommonArray[Math.floor(Math.random()*superCommonArray.length)];
        }
        else{
            //alert("common");
            word = commonArray[Math.floor(Math.random()*commonArray.length)];
        }
        
        word_list = word_list + word + " ";
    }
    word_list = word_list.substring(0,word_list.length-1);  
    setText();
}

function setText()
{   
    for (let i = 0; i < word_list.length; i++)
    {
        createCursors();
        createDiv(word_list.substring(i, i+1));
    } 
    for(let i = 1; i <= word_list.length; i++)
    {
        first_try.push(false);
        first_try_correct.push(false);
    }
    var spaces = [];
    spaces.push(-1);
    for(let i = 0; word_list.length-spaces[i]-1 > 62; i++)
    {
        var new_space = checkSpace(spaces[i]+63);
        spaces.push(new_space);
        var new_width = 1498-24*(new_space-spaces[i]-1)+"px";
        character_element_array[new_space].style.width = new_width;
    }
    var total_width = 0;
    for(let i = 0; i<space_last; i++)
    {
        var element = cursor_element_array[i];
        var width = element.clientWidth;
        total_width +=width;
        element = character_element_array[i];
        width = element.clientWidth;
        total_width +=width;
    }
    //alert(total_width)
    blinker_interval = setInterval(blink, 500);
}
function setQuote(text)
{
    txt = text;
    var quote_Array = txt.split(/\r?\n/);
    word_list = quote_Array[Math.floor(Math.random()*quote_Array.length)];
    var fill_array = word_list.split(" "); 
    total_word_length = fill_array.length;
    setText();
}
function createCursors()
{
    var element = document.createElement("div");
    element.style.color = "rgb(101,101,209)";
    element.style.display = "inline-block";
    element.style.width = "2px";
    element.style.height = "40px";
    //element.style.backgroundColor = "white";
    element.style.backgroundColor = background_color;
    document.getElementById('prompt').appendChild(element);
    cursor_element_array.push(element);
}
function checkSpace(start)
{
    for (let i = start; i>= 0; i--)
    {
        if (word_list.substring(i, i+1) === " ")
        {
            space_last = i;
            return i;
        }
    }
}

function createDiv(character)
{
    //alert("creating child")  
    var element = document.createElement("div");
    element.appendChild(document.createTextNode(character));
    element.style.color = text_color;
    element.style.display = "inline-block";
    element.style.fontSize = "40px";
    element.style.height = "40px";
    element.style.fontFamily = "Roboto Mono, monospace";
    //element.style.border = "1px solid white";
    
    if(character === " ")
    {
        element.style.width = "22px";
    }
    character_element_array.push(element);
    document.getElementById('prompt').appendChild(element);
}
function colorDivs()
{
    //alert("coloring");
    //alert(background_color);
    for (const element of background_color_divs) {
        element.style.backgroundColor = background_color;
    }
     
    for (const element of title_color_divs) {
        element.style.color = title_color;
    }
    for (const element of text_color_divs) {
        element.style.color = text_color;
    }
    for (const element of alt_text_color_divs) {
        element.style.color = alt_text_color;
    }   
    if (light_bg_color.length>0)
    {
        
        for (const element of lightbg_color_divs) {
        element.style.backgroundColor = light_bg_color;
        }
    }  
    
}   