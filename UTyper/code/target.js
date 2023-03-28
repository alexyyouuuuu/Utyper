function targetKeyDown(event)
{
    if (target_focus !== 0)
    {
        var keytyped = event.key;
        keytyped = keytyped.toLowerCase();   
        if(keytyped === "shift"){return} 
        else if (keytyped.length > 1)
        {
            alert("Improper character entered, please select a different one");
        }
        else
        {
            for(let i = 0; i < 6; i++)
            {
                if(target_characters[i] === keytyped && keytyped !== " ")
                {
                    alert("character already used");
                    return;
                }
                
            }
            if (target_focus === 1)
            {
                target1.innerHTML = keytyped;
                target_characters[0] = keytyped;
                localStorage.target1 = keytyped;
            }
            else if (target_focus === 2)
            {
                target2.innerHTML = keytyped;
                target_characters[1] = keytyped;
                localStorage.target2 = keytyped;
            }
            else if (target_focus === 3)
            {
                target3.innerHTML = keytyped;
                target_characters[2] = keytyped;
                localStorage.target3 = keytyped;
            }
            else if (target_focus === 4)
            {
                target4.innerHTML = keytyped;
                target_characters[3] = keytyped;
                localStorage.target4 = keytyped;
            }
            else if (target_focus === 5)
            {
                target5.innerHTML = keytyped;
                target_characters[4] = keytyped;
                localStorage.target5 = keytyped;
            }
            for(let i = 0; i < 6; i++)
            {
                if(i === target_focus){target_characters[i] = keytyped}
            }
            target_focus = 0;
        }        
        
    }
    
}
function targetClick(event)
{
    if(target1.contains(event.target)){target_focus = 1}
    else if(target2.contains(event.target)){target_focus = 2}
    else if(target3.contains(event.target)){target_focus = 3}
    else if(target4.contains(event.target)){target_focus = 4}
    else if(target5.contains(event.target)){target_focus = 5}
    else{target_focus = 0}
    
}
