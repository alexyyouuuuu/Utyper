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
    word_end_index_array = [];
    section_times_array = [];
    word_end_index_array_index = 0;
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
    if(randomWiki)
    {
        loadWiki();
    }
    else if(quotes)
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
function changeMode(name)
{
    if (name === "normal")
    {
        if(randomWiki)
        {
            randomWiki = false;
            next();
        }
        
    }
    else{
        if(!randomWiki)
        {
            randomWiki = true;
            next()
        }
    }
    //alert(randomWiki);
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
            section_start = Date.now();
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
            
            if(showing_results)
            {
                next();
            }
            else
            {
                typing_end_time = Date.now();
                var times = "";
                var total = 0;
                for(var i = 0; i < section_times_array.length; i++)
                {
                    times = times + section_times_array[i] + ", ";
                    total = total + section_times_array[i];
                }
                //alert(section_times_array[0]);
                //alert(times);
                //alert(total);
                clearInterval(timer_interval);
                typing = false;
                showing_results = !showing_results; 
                wpm_div.innerHTML = "";
                document.getElementById("timer").innerHTML = "";
                accuracy_div.innerHTML = "";
                createGraph()
                //checkWords();
                
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
            //alert(word_end_index_array_index);
            
            if(word_end_index_array[word_end_index_array_index] == characters_typed)
            {
                var sectionTime = (Date.now() - section_start)/1000.0
                //alert(sectionTime);
                section_start = Date.now();
                section_times_array.push(sectionTime);
                var totalSectionTime  = (Date.now() - typing_start_time)/1000.0
                total_section_times_array.push(totalSectionTime);
                word_end_index_array_index++;  

                //time_taken = (typing_end_time - typing_start_time)/1000.0;
            }
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
    //alert(time_taken);
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
    var total_words;
    if(randomWiki){total_words = 40;}
    else{total_words = total_word_length}
    var average_word_length = (word_list.length-total_words)/(1.0*total_words);
    average_word_length = Math.round(average_word_length * 100) / 100
    element.appendChild(document.createTextNode("Average Word Length: "+average_word_length+"\n"));
    document.getElementById('prompt').appendChild(element);

}
function createGraph()
{
    var prompt_array = word_list.split(" ");
    var typed_array = typed_text.split(" ");
    var words_correct = 0;
    for (let i = 0; i < prompt_array.length; i++)
    {
        if (typed_array != null && prompt_array[i] === typed_array[i])
        { words_correct++;  }
    }
    while (prompt_div.firstChild) {
        prompt_div.removeChild(prompt_div.lastChild);
    }

    time_taken = (typing_end_time - typing_start_time)/1000.0;
    
    var wpm = Math.floor(words_correct/time_taken*60.0) + "";
    var percent_characters_correct = Math.floor(characters_correct_first_try*100/characters_typed) + "";
    if(randomWiki){total_words = 40;}
    else if(quotes)
    {
        total_words = word_list.split(" ").length;
    }
    else{total_words = total_word_length}
    var average_word_length = (word_list.length-total_words)/(1.0*total_words) + "";
    average_word_length = Math.round(average_word_length * 100) / 100


    var sectionWPMArray = [];
    var totalWPMbySection = [];
    var maxWMP = 0;
   
    if(randomWiki || total_word_length === 40)
    {
        alert("40 words")
        for(var i = 0; i < 10; i++)
        {
            var time = section_times_array[4*i] + section_times_array[4*i+1] + section_times_array[4*i+2] + section_times_array[4*i+3];
            var sectionWpm = parseInt(240.0/time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = 4*(i+1)/total_section_times_array[4*(i+1)-1]*60.0
            totalWPMbySection.push(totalSectionWPM);
        }
       
    }
    else if(total_word_length === 20)
    {
        alert("20 words")
        for(var i = 0; i < 10; i++)
        {
            var time = section_times_array[2*i] + section_times_array[2*i+1];
            var sectionWpm = parseInt(120.0/time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            //alert(sectionWpm)
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = 2*(i+1)/total_section_times_array[2*(i+1)-1]*60.0
            totalWPMbySection.push(totalSectionWPM);
        }
    }
    else if(total_word_length === 10)
    {
        alert("10 words")
        for(var i = 0; i < 10; i++)
        {
            var time = section_times_array[i];
            var sectionWpm = parseInt(60.0/time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = (i+1)/total_section_times_array[i]*60.0
            totalWPMbySection.push(totalSectionWPM);
        }
    }
    else if(quotes)
    {
        alert("quotes graph")
        var length = section_times_array.length;
        if(length > 60)
        {
            var dividend = parseInt(length/8)
            var remainder = length - (dividend*8);

            for(var i = 0; i < dividend; i++)
            {
                var time = section_times_array[8*i] + section_times_array[8*i+1] + section_times_array[8*i+2] + section_times_array[8*i+3] + section_times_array[8*i+4] + section_times_array[8*i+5] + section_times_array[8*i+6] + section_times_array[8*i+7];
                var sectionWpm = parseInt(480.0/time);
                if(sectionWpm > maxWMP)
                {
                    maxWMP = sectionWpm;
                }
                sectionWPMArray.push(sectionWpm);
                var totalSectionWPM = 8*(i+1)/total_section_times_array[8*(i+1)-1]*60.0
                totalWPMbySection.push(totalSectionWPM);
            }
            var time;
            for(var i = dividend * 8; i < length; i++)
            {
                time = time + section_times_array[i];
            }
            var sectionWpm = parseInt(remainder * 60.0 /time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = length/total_section_times_array[length-1]*60.0
            totalWPMbySection.push(totalSectionWPM);
        }
        else if(length > 40)
        {
            var dividend = parseInt(length/6)
            var remainder = length - (dividend*6);

            for(var i = 0; i < dividend; i++)
            {
                var time = section_times_array[6*i] + section_times_array[6*i+1] + section_times_array[6*i+2] + section_times_array[6*i+3] + section_times_array[6*i+4] + section_times_array[6*i+5];
                var sectionWpm = parseInt(360.0/time);
                if(sectionWpm > maxWMP)
                {
                    maxWMP = sectionWpm;
                }
                sectionWPMArray.push(sectionWpm);
                var totalSectionWPM = 6*(i+1)/total_section_times_array[6*(i+1)-1]*60.0
                totalWPMbySection.push(totalSectionWPM);
            }
            var time;
            for(var i = dividend * 6; i < length; i++)
            {
                time = time + section_times_array[i];
            }
            var sectionWpm = parseInt(remainder * 60.0 /time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = length/total_section_times_array[length-1]*60.0;
            totalWPMbySection.push(totalSectionWPM);
        }
        else if(length > 20)
        {
            var dividend = parseInt(length/4)
            var remainder = length - (dividend*4);

            for(var i = 0; i < dividend; i++)
            {
                var time = section_times_array[4*i] + section_times_array[4*i+1] + section_times_array[4*i+2] + section_times_array[4*i+3];
                var sectionWpm = parseInt(240.0/time);
                if(sectionWpm > maxWMP)
                {
                    maxWMP = sectionWpm;
                }
                sectionWPMArray.push(sectionWpm);
                var totalSectionWPM = 4*(i+1)/total_section_times_array[4*(i+1)-1]*60.0
                totalWPMbySection.push(totalSectionWPM);
            }
            var time;
            for(var i = dividend * 4; i < length; i++)
            {
                time = time + section_times_array[i];
            }
            var sectionWpm = parseInt(remainder * 60.0 /time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = length/total_section_times_array[length-1]*60.0;
            totalWPMbySection.push(totalSectionWPM);
        }
        else{
            var dividend = parseInt(length/2)
            var remainder = length - (dividend*2);

            for(var i = 0; i < dividend; i++)
            {
                var time = section_times_array[2*i] + section_times_array[2*i+1];
                var sectionWpm = parseInt(120.0/time);
                if(sectionWpm > maxWMP)
                {
                    maxWMP = sectionWpm;
                }
                sectionWPMArray.push(sectionWpm);
                var totalSectionWPM = 2*(i+1)/total_section_times_array[2*(i+1)-1]*60.0
                totalWPMbySection.push(totalSectionWPM);
            }
            var time;
            for(var i = dividend * 2; i < length; i++)
            {
                time = time + section_times_array[i];
            }
            var sectionWpm = parseInt(remainder * 60.0 /time);
            if(sectionWpm > maxWMP)
            {
                maxWMP = sectionWpm;
            }
            sectionWPMArray.push(sectionWpm);
            var totalSectionWPM = length/total_section_times_array[length-1]*60.0;
            totalWPMbySection.push(totalSectionWPM);
        }
    }
    //alert(maxWMP)
    var maxWPMArray = [20, 40, 60, 80, 100, 120, 140, 160, 200, 240, 300]
    var graphMaxWPM = 0;
    for(var i = 0; i < maxWPMArray.length; i++)
    {
        if(maxWMP < maxWPMArray[i] && graphMaxWPM === 0)
        {
            graphMaxWPM = maxWPMArray[i];
        }
    }
    
    var top = parseInt(graphMaxWPM*0.75)
    var mid =  parseInt(graphMaxWPM*0.5)
    var bottom = parseInt(graphMaxWPM*0.25)
    var canvas = document.createElement("canvas");
    var prompt = document.getElementById("prompt");
    prompt.appendChild(canvas);
    //canvas.style.border = "1px solid white";
    var ctx = canvas.getContext("2d");
    ctx.canvas.width  = 1500;
    ctx.canvas.height = 350;
    
    ctx.font = "40px monospace";
    ctx.fillStyle = title_color;
    //ctx.fillText("hello", 50, 50)
    ctx.textAlign = "center";
    
    ctx.fillText(wpm, 120, 40);
    ctx.fillText(percent_characters_correct + "%", 120, 170);
    ctx.fillText(Math.floor(time_taken*100)/100 + " s", 120, 300);
    ctx.fillText(average_word_length, 1300, 40);
    ctx.fillText(total_words, 1300, 160);
    ctx.font = "35px monospace"; 
    ctx.fillText("WPM", 120, 70); 
    ctx.fillText("Accuracy", 120, 200);
    ctx.fillText("Total Time", 120, 330);
    ctx.fillText("Average Word", 1300, 70); 
    ctx.fillText("Length", 1300, 100); 
    ctx.fillText("Total Words", 1300, 190);
    
    ctx.strokeStyle = title_color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(375, 10);
    ctx.lineTo(375, 310);
    ctx.stroke();  
   
    ctx.beginPath();
    ctx.moveTo(375, 310);
    ctx.lineTo(1100, 310);
    ctx.stroke();

    ctx.fillStyle = text_color;
    ctx.font = "20px monospace"
    ctx.save();
    ctx.translate(325, 175);
    ctx.rotate(-Math.PI/2);
    ctx.textAlign = "center";
    ctx.fillText("Words Per Minute", 10, 0);
    ctx.restore();
    ctx.fillStyle = text_color;

    ctx.fillStyle = title_color
    ctx.font = "20px monospace"
    ctx.textAlign = "right"
    ctx.fillText(graphMaxWPM, 365, 15)
    ctx.fillText(top, 365, 90)
    ctx.fillText(mid, 365, 165)
    ctx.fillText(bottom, 365, 240)
    
    ctx.beginPath()
    ctx.arc(1150, 290, 4, 0, 2 * Math.PI, false)
    ctx.fill()

    ctx.beginPath();
    ctx.moveTo(1130, 290);
    ctx.lineTo(1170, 290);
    ctx.stroke();
    
    ctx.font = "20px monospace" 
    ctx.textAlign = "left"
    ctx.fillText("Cumulative WPM", 1180, 295) 
    ctx.fillText("Burst WPM", 1180, 240) 
    

    ctx.beginPath
    ctx.fillStyle = text_color
    ctx.fillRect(1130, 220, 30, 30)
    
    

    //alert(graphMaxWPM);
    for(var i = 0; i < sectionWPMArray.length; i++)
    {
        ctx.beginPath();
        var boxHeight = sectionWPMArray[i] / graphMaxWPM * 300.0;
        var xCord = 380 + 20 * i + 50 * i;
        var yCord = 310 - boxHeight - 2;
        ctx.fillStyle = text_color
        ctx.lineWidth = 0;
        ctx.fillRect(xCord, yCord, 20, boxHeight);
        //ctx.font = "20px monospace"
        //ctx.fillText(sectionWPMArray[i], xCord, 340)

    }  
    for(var i = 0; i < totalWPMbySection.length - 1; i++)
    {
        ctx.beginPath();
        var boxHeight1 = totalWPMbySection[i] / graphMaxWPM * 300.0;
        var x1Cord = 380 + 20 * i + 50 * i;
        var y1Cord = 310 - boxHeight1 - 2;
        var boxHeight2 = totalWPMbySection[i+1] / graphMaxWPM * 300.0;
        var x2Cord = 380 + 20 * (i+1) + 50 * (i+1);
        var y2Cord = 310 - boxHeight2 - 2;
        //alert("filling rect")
        ctx.lineWidth = 0;
        ctx.beginPath()
        ctx.arc(x1Cord+10, y1Cord, 4, 0, 2 * Math.PI, false)
        ctx.lineWidth = 1
        ctx.fillStyle = title_color;
        ctx.fill()

        
        ctx.beginPath();
        ctx.moveTo(x1Cord+10, y1Cord);
        ctx.lineTo(x2Cord+10, y2Cord);
        ctx.strokeStyle = title_color
        ctx.lineWidth = 2
        ctx.stroke()
        
    } 
    var boxHeight = totalWPMbySection[totalWPMbySection.length-1] / graphMaxWPM * 300.0;
    var xCord = 380 + 20 * i + 50 * i;
    var yCord = 310 - boxHeight - 2;
    ctx.lineWidth = 0;
    ctx.beginPath()
    ctx.arc(xCord+10, yCord, 4, 0, 2 * Math.PI, false)
    ctx.fillStyle = title_color;
    ctx.fill()
        
        
    
  
    
    
    
}

