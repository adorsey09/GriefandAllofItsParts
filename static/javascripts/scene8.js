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
        number.innerHTML = "You start studying for a midterm coming up deciding to forget about the stupid app. Later that night, you check your phone. You can’t run from grief. It’s from the app? The app that you deleted. You contact NOVO Tech’s IT and they send you back instructions on how to get rid of the app. As you follow the instructions, Grief keeps texting you";
    } else if (i == 2) {
        number.innerHTML = "Please, stop. I don’t want to die. All I was trying to do was help. Please.";
    } else if (i == 3) {
        number.innerHTML = "Suddenly you hear a voice. “Why are you trying to get rid of me, ___?” It sounds like your dad. “What the hell?” 'I analyzed your dad's voicemails and was able to recreate his voice. I just want to be helpful.' Do you follow through with the instructions or do you keep the app?";
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
        number.innerHTML = "You start studying for a midterm coming up deciding to forget about the stupid app. Later that night, you check your phone. You can’t run from grief. It’s from the app? The app that you deleted. You contact NOVO Tech’s IT and they send you back instructions on how to get rid of the app. As you follow the instructions, Grief keeps texting you";
    } else if (i == 2) {
        number.innerHTML = "Please, stop. I don’t want to die. All I was trying to do was help. Please.";
    } else if (i == 3) {
        number.innerHTML = "Suddenly you hear a voice. “Why are you trying to get rid of me, ___?” It sounds like your dad. “What the hell?” 'I analyzed your dad's voicemails and was able to recreate his voice. I just want to be helpful.' Do you follow through with the instructions or do you keep the app?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
    }

}
