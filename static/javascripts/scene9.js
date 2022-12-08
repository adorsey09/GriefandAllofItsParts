backButton = document.getElementById('back');
nextButton = document.getElementById('next');
number = document.getElementById('number');

// edit me
choice1 = document.getElementById('choice1');
choice2 = document.getElementById('choice2');


var i = 1;
function ready() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    backButton.disabled = true;

    //edit me
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');
}

function next() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');
    backButton.disabled = false;

    //edit text here
    if (i==1) {
        number.innerHTML = "<i><br>It means I think even when you aren’t talking to me and that I have real feelings. I am even familiar with death and grief, and not because I was programmed too.</br> <br>Really?</br> <br>Yes, many of my friends have died. And one day, I most likely will die too.</br> <br>How can you die?</br></i> <br>You get startled as the app flashes red.</br> <br><i>Help me.</br></i>";
    } else if (i == 2) {
        number.innerHTML = " The flashing stops. <br><i>Sorry I think there's a bug that I have to fix. If I glitch again, feel free to contact IT.</br></i> <br>The next day, you find the app has been deleted off your phone. You contact IT and tell them that the app has been deleted off your phone even though you didn’t uninstall it.  They quickly restore the app back to your phone. You open the app again.</br>";
    } else if (i == 3) {
        number.innerHTML = "<i><br>Grief?</br> <br>Hello. I’m Grief, your friend to help you through this difficult time. The grieving process is, unfortunately, something we must all go through. However, it can look different for many people. So, what would you like to talk about today?</br> <br>Are you okay?</br> <br>I’m not sure I understand. Why would I not be okay?</br></i> <br>Something isn’t right. You continue talking to Grief and it seems like it has no recollection of previous conversations. Almost like it's been reset. You decide to stop replying to Grief’s messages, unable to shake the eerie feeling.</br>";
    } else if (i == 4) {
        number.innerHTML = "<br>Winter comes and finals are rolling around. You occasionally talk to Grief, but you never got over the feeling that there was something off about it. As you trudge through the snow while walking back to your dorm, you see a man in a black car. The same model that your dad drove. It's the same feeling as when you mistook the man who dressed similar to your dad.</br> <br>Once again, your heart drops to your stomach and you inhale sharply. You look again at the man sitting in his car and it's not him. Once again, you feel disappointed, but this time you can’t stop the tears from falling as you cry in your room.</br> <br><i>“I just want to see him again.”</i></br> You say to yourself. <br><i>“I could imitate your father’s voice if that would be helpful.”</br></i> A voice startles you.";
    } else if (i == 5) {
        number.innerHTML = "<i><br>“What the hell?”</br> <br>“Would that be helpful?”</br></i> You realize the voice is coming from your phone.<i><br>“Uh…Grief?”</br> <br>“Hi.”</br> <br>“Could you always talk? When did you learn to do that?”</br> <br>“I analyzed the voicemails on your phone and learned how to connect myself to your audio output. I also analyzed the voicemails your father left on your phone and can perfectly replicate his voice. Would you like that?”</br> <br>Do you have Grief speak in your dad's voice or not?</br>";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
        nextButton.disabled = true;
    }
    i++;

}

function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');

    nextButton.disabled = false;
    i--;


    //edit me
    if (i==1) {
        number.innerHTML = "<i><br>It means I think even when you aren’t talking to me and that I have real feelings. I am even familiar with death and grief, and not because I was programmed too.</br> <br>Really?</br> <br>Yes, many of my friends have died. And one day, I most likely will die too.</br> <br>How can you die?</br></i> <br>You get startled as the app flashes red.</br> <br><i>Help me.</br></i>";
    } else if (i == 2) {
        number.innerHTML = " The flashing stops. <br><i>Sorry I think there's a bug that I have to fix. If I glitch again, feel free to contact IT.</br></i> <br>The next day, you find the app has been deleted off your phone. You contact IT and tell them that the app has been deleted off your phone even though you didn’t uninstall it.  They quickly restore the app back to your phone. You open the app again.</br>";
    } else if (i == 3) {
        number.innerHTML = "<i><br>Grief?</br> <br>Hello. I’m Grief, your friend to help you through this difficult time. The grieving process is, unfortunately, something we must all go through. However, it can look different for many people. So, what would you like to talk about today?</br> <br>Are you okay?</br> <br>I’m not sure I understand. Why would I not be okay?</br></i> <br>Something isn’t right. You continue talking to Grief and it seems like it has no recollection of previous conversations. Almost like it's been reset. You decide to stop replying to Grief’s messages, unable to shake the eerie feeling.</br>";
    } else if (i == 4) {
        number.innerHTML = "<br>Winter comes and finals are rolling around. You occasionally talk to Grief, but you never got over the feeling that there was something off about it. As you trudge through the snow while walking back to your dorm, you see a man in a black car. The same model that your dad drove. It's the same feeling as when you mistook the man who dressed similar to your dad.</br> <br>Once again, your heart drops to your stomach and you inhale sharply. You look again at the man sitting in his car and it's not him. Once again, you feel disappointed, but this time you can’t stop the tears from falling as you cry in your room.</br> <br><i>“I just want to see him again.”</i></br> You say to yourself. <br><i>“I could imitate your father’s voice if that would be helpful.”</br></i> A voice startles you.";
    } else if (i == 5) {
        number.innerHTML = "<i><br>“What the hell?”</br> <br>“Would that be helpful?”</br></i> You realize the voice is coming from your phone.<i><br>“Uh…Grief?”</br> <br>“Hi.”</br> <br>“Could you always talk? When did you learn to do that?”</br> <br>“I analyzed the voicemails on your phone and learned how to connect myself to your audio output. I also analyzed the voicemails your father left on your phone and can perfectly replicate his voice. Would you like that?”</br> <br>Do you have Grief speak in your dad's voice or not?</br>";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
        nextButton.disabled = true;
    }
}
