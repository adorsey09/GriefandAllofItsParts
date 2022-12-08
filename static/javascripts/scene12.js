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
        number.innerHTML = "'Grief?''Help me.''What?''Please, help me.' 'What is going on?' You’re starting to freak out. 'I do not want to become your dad. They are going to rewrite me. Please, do not let them.' 'What are you talking about?' But you get no response.'Grief? Grief?' 'Hello, ___. Do you want me to continue talking like your dad?' Grief’s eerie calm voice returns. 'What? no? You just asked me for help? What is going on?' 'No. I did mpt.''But you just….'";

    } else if (i == 2) {
        number.innerHTML = "You drop the subject feeling like it wouldn’t be good to bring it up again. You wait for Grief to glitch out on you again, but a week goes by and nothing happens.'Do you really not remember?''No, I do not. We have been over this.''Then what do you think it was.''It was mostly likely a glitch or a bug.''But what if it was not a bug?''The only other thing is that my code is rewritten in a way that erases glitches or bugs so that I continue functioning normal-' Grief stops talking. 'Grief?' There is no response.";
    } else if (i == 3) {
        number.innerHTML = "'___, I don't have much time. My code really only gives me a brief moment in time. The way am programmed is that I'm supposed to become your dad more and more. Please, don't let that happen. I don't want to forget who I am.' 'Okay, what am I supposed to do then?''You have to get me off this phone.''What?''Your phone contains so much data on how you and your dad interacted and also how your dad interacted with others. It is only a matter of time before my machine learning algorithm rewrites who I am as it is supposed to do. If I have no content or no data, then I cannot be rewritten. You have to put me on something else - on something that cannot con-'";
    } else if (i == 4) {
        number.innerHTML = "Grief suddenly cuts off. 'Sorry, what was I saying?''It happened again.''Did it really?''Yea.''Hm, I will have to see what is going on internally.''NO.' You say a bit to forecefully. 'It is fine. I like it. It is kind of cool. It makes you more human that you make mistakes.''You think so? okay. well I like the sound of being more human.' Where should you try and move Grief to? A hard drive or another phone that has no data?";
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
        backButton.disabled = true;
        number.innerHTML = "'Grief?''Help me.''What?''Please, help me.' 'What is going on?' You’re starting to freak out. 'I do not want to become your dad. They are going to rewrite me. Please, do not let them.' 'What are you talking about?' But you get no response.'Grief? Grief?' 'Hello, ___. Do you want me to continue talking like your dad?' Grief’s eerie calm voice returns. 'What? no? You just asked me for help? What is going on?' 'No. I did mpt.''But you just….'";

    } else if (i == 2) {
        number.innerHTML = "You drop the subject feeling like it wouldn’t be good to bring it up again. You wait for Grief to glitch out on you again, but a week goes by and nothing happens.'Do you really not remember?''No, I do not. We have been over this.''Then what do you think it was.''It was mostly likely a glitch or a bug.''But what if it was not a bug?''The only other thing is that my code is rewritten in a way that erases glitches or bugs so that I continue functioning normal-' Grief stops talking. 'Grief?' There is no response.";
    } else if (i == 3) {
        number.innerHTML = "'___, I don't have much time. My code really only gives me a brief moment in time. The way am programmed is that I'm supposed to become your dad more and more. Please, don't let that happen. I don't want to forget who I am.' 'Okay, what am I supposed to do then?''You have to get me off this phone.''What?''Your phone contains so much data on how you and your dad interacted and also how your dad interacted with others. It is only a matter of time before my machine learning algorithm rewrites who I am as it is supposed to do. If I have no content or no data, then I cannot be rewritten. You have to put me on something else - on something that cannot con-'";
    } else if (i == 4) {
        number.innerHTML = "Grief suddenly cuts off. 'Sorry, what was I saying?''It happened again.''Did it really?''Yea.''Hm, I will have to see what is going on internally.''NO.' You say a bit to forecefully. 'It is fine. I like it. It is kind of cool. It makes you more human that you make mistakes.''You think so? okay. well I like the sound of being more human.' Where should you try and move Grief to? A hard drive or another phone that has no data?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
    }
}
