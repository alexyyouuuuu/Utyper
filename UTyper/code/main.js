window.onload = loadAll();

function next()
{
    var parent = document.getElementById('prompt');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    showing_results = false;
    word_list = "";
    character_element_array = [];
    cursor_element_array = [];
    first_try = [];
    characters_correct_first_try = 0;
    seconds = 0;
    characters_typed = 0;
    typed_text = "";
    document.getElementById("timer").innerHTML = "";
    typing = false;    
    clearInterval(timer_interval);
    clearInterval(blinker_interval);
    wpm_div.innerHTML="";
    accuracy_div.innerHTML="";
    if(quotes)
    {
        loadQuote();
    }
    else if(current_page === "letters")
    {
        loadLetters(total_word_length);
    }
    else if(current_page === "targetTyping")
    {
        loadTarget(total_word_length);
    }
    else{
        loadWords(total_word_length);
    }
    
}
function changeWordCount(number)
{
    total_word_length = number;
    quotes = false;
    next();
}
function nextQuote()
{   
    quotes = true;
    next();
}
function cursorMove(direction)
{
    
    if (direction === "forward")
    {
        current_cursor = cursor_element_array[characters_typed-1];
        current_cursor.style.backgroundColor = background_color;
        next_cursor = cursor_element_array[characters_typed];
        next_cursor.style.backgroundColor = "white";
    }
    else
    {
        current_cursor = cursor_element_array[characters_typed+1];
        current_cursor.style.backgroundColor = background_color;
        next_cursor = cursor_element_array[characters_typed];
        next_cursor.style.backgroundColor = "white";
    }
   
}
function checkKeyDown(event)
{
    
    
    if (focused_on_input)
    {
        if(!typing && !showing_results)
        {
            typing = true;
            typing_start_time = Date.now();
            timer_interval = setInterval(updateTime, 1000);
        }
        var keytyped = event.key;
        if (keytyped === "Backspace")
        {
            if(!noBackspace)
            {
                characters_typed--;
                removeDiv();
                cursorMove("backward");
                typed_text = typed_text.substring(0,typed_text.length-1);
                clearInterval(blinker_interval);
                blinker_interval = setInterval(blink, 500);
            }
            
        } 
        else if(keytyped === "Enter")
        {
            typing_end_time = Date.now();
            checkWords();
            clearInterval(timer_interval);
            typing = false;
            if(showing_results)
            {
                next();
            }
            else
            {
                showing_results = !showing_results; 
            }
           
            //window.location.href = "results.html";
            
        }
        else if(keytyped === " ")
        {
            characters_typed++;
            event.preventDefault();
            typed_text = typed_text + keytyped;
            clearInterval(blinker_interval);
            blinker_interval = setInterval(blink, 500);
            changeDiv(" ");
            cursorMove("forward");
        }
        else if(keytyped.length > 1){       }
        
        else
        {
            characters_typed++;
            typed_text = typed_text + keytyped;
            changeDiv(keytyped);
            clearInterval(blinker_interval);
            blinker_interval = setInterval(blink, 500);
            cursorMove("forward");
        }
    }
}
function removeDiv()
{
    var element = character_element_array[characters_typed];
    if(element.innerHTML === "_")
    {
        element.innerHTML = "";
    }
    if(trueTyping)
    {
        element.innerHTML = word_list.charAt(characters_typed);
    }
    element.style.color = text_color;
    
}

function changeDiv(keytyped)
{
    var correct_character = word_list.substring(characters_typed-1, characters_typed);
    var element = character_element_array[characters_typed-1];
    if (keytyped === correct_character)
    {
        element.style.color = alt_text_color;
        if(!first_try[characters_typed-1])
        {
            characters_correct_first_try++;
        }
    }
    else{
        if(noError)
        {
            typing_end_time = Date.now();
            checkWords();
            clearInterval(timer_interval);
            typing = false;
            showing_results = !showing_results;
        }
        else if(trueTyping)
        {
            element.innerHTML = keytyped;
        }
        else if(correct_character === " ")
        {
            element.innerHTML = "_";
        }
        element.style.color = "red";
        //element.style.textDecoration = "underline";
        //element.style.textDecorationColor = "red";
    }
    first_try[characters_typed-1] = true;
}
function updateTime()
{
    seconds++;
    var timer = document.getElementById("timer");
    timer.innerHTML = seconds;
    if (seconds > 1 && liveWPM)
    {   
        var current_wpm = checkWPM(seconds);
        wpm_div.innerHTML = current_wpm;
    }
    if (seconds > 1 && livePercent)
    {
        var current_accuracy = checkAccuracy();
        accuracy_div.innerHTML = current_accuracy+"%";
    }
}
function blink()
{   
    current_cursor = cursor_element_array[characters_typed];
    if(current_blink === "none")
    {
        current_cursor.style.backgroundColor = "white";
        current_blink = "show";
    }
    else if(current_blink === "show")
    {
        current_cursor.style.backgroundColor = background_color;
        current_blink = "none";
    }
    
}
function windowClick(event)
{
    if(prompt_div.contains(event.target))
    {
        //alert("clicked inside")
        focused_on_input = true;
    }
    else
    {
        //alert("clicked outside")
        focused_on_input = false;
    }
    
}
function inputClick()
{
    focused_on_input = true;       
}

function buttonClick()
{
    //alert(typed_text);
    var element = character_element_array[0];
    var width = element.clientWidth;
    alert(wpm);
    alert(accuracy);
    
}
function checkWPM(time)
{
    var typed_array = typed_text.split(" ");
    var prompt_array = word_list.split(" ");
    var words_correct = 0;
    for (let i = 0; i < prompt_array.length; i++)
    {
        if (typed_array != null && prompt_array[i] === typed_array[i])
        {
            words_correct++;
        }
    }
    var r = Math.floor(words_correct/time*60.0);
    return r;
    
}
function checkAccuracy()
{
    var r = Math.floor(characters_correct_first_try*100/characters_typed);
    return r;
}
function checkWords()
{
    var prompt_array = word_list.split(" ");
    var typed_array = typed_text.split(" ");
    var words_correct = 0;
    for (let i = 0; i < prompt_array.length; i++)
    {
        if (typed_array != null && prompt_array[i] === typed_array[i])
        { words_correct++;  }
    }
    time_taken = (typing_end_time - typing_start_time)/1000.0;
    var wpm = Math.floor(words_correct/time_taken*60.0)
    
    while (prompt_div.firstChild) {
        prompt_div.removeChild(prompt_div.lastChild);
    }
    var element = document.createElement("pre");
    
    var percent_characters_correct = Math.floor(characters_correct_first_try*100/characters_typed);
    element.style.color = text_color;
    element.style.fontSize = "60px";
    element.style.height = "60px";
    element.style.width = "1500px";
    element.style.fontFamily = "Roboto Mono, monospace";
    element.appendChild(document.createTextNode("WPM: "+wpm+"\n"));
    document.getElementById('prompt').appendChild(element);

    element.appendChild(document.createTextNode("Accuracy: "+[percent_characters_correct]+"%\n"));
    document.getElementById('prompt').appendChild(element);

    
    var average_word_length = (word_list.length-total_word_length)/(1.0*total_word_length);
    average_word_length = Math.round(average_word_length * 100) / 100
    element.appendChild(document.createTextNode("Average Word Length: "+average_word_length+"\n"));
    document.getElementById('prompt').appendChild(element);

}


