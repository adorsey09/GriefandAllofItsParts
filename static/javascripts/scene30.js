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
        number.innerHTML = "No. I thought I just saw my dad although it was just a person who looked dressed like him. Oh, that must have been a very surprising and overwhelming experience. Here are some breathing exercises you can try if you ever feel too overwhelmed. Great. Breathing exercises. Was this thing even sentient? It seemed like it responded with the most generic answers. Frustrated, you close the app and go to the lecture hall where your class is. You didn’t particularly enjoy this class, but it was considered an easy class so you decided to take it. As you surf the web on your computer, you get a notification.";
    } else if (i == 2) {
        number.innerHTML = "You got this, ____. Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 3) {
        number.innerHTML = "What are you doing? You ask Grief. One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.";
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
    backButton.disabled = true;

    if (i==1) {
        number.innerHTML = "Yea, I’m okay. Okay. I know it can be overwhelming sometimes to go back to normal life. Here are some breathing exercises you can try if you ever feel too overwhelmed. Great. Breathing exercises. That was sure to help. Frustrated, you close the app and go to the lecture hall where your class is. You didn’t particularly enjoy this class, but it was considered an easy class so you decided to take it. As you surf the web on your computer, you get a notification.";
    } else if (i == 2) {
        number.innerHTML = "You got this ____. Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 3) {
        number.innerHTML = "What are you doing? You ask Grief. One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
        nextButton.disabled = true;
    }

}
