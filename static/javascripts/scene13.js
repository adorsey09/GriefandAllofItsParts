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
    if (i == 1) {
        number.innerHTML = "You return to normal life except something is still making your skin crawl. Everywhere you go, you feel like you are being watched. Everytime, you leave your dorm, you keep looking over your shoulder.Winter comes and finals are rolling around. As you trudge through the snow while walking back to your dorm, you see a man in a black car. The same model that your dad drove. It's the same feeling as when you mistook the man who dressed similar to your dad. Your heart drops to your stomach and you inhale sharply. You look again at the man sitting in his car, but the car is gone. You continue to see your dad in people around you. What is going on? Were you losing your mind?One day, you catch a man staring at you, but not just a man, your father. This time you are sure it’s him. The man catches you staring at him, and quickly turns walking away. Do you follow the man or not?";
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


    if (i == 1) {
        number.innerHTML = "You return to normal life except something is still making your skin crawl. Everywhere you go, you feel like you are being watched. Everytime, you leave your dorm, you keep looking over your shoulder.Winter comes and finals are rolling around. As you trudge through the snow while walking back to your dorm, you see a man in a black car. The same model that your dad drove. It's the same feeling as when you mistook the man who dressed similar to your dad. Your heart drops to your stomach and you inhale sharply. You look again at the man sitting in his car, but the car is gone. You continue to see your dad in people around you. What is going on? Were you losing your mind?One day, you catch a man staring at you, but not just a man, your father. This time you are sure it’s him. The man catches you staring at him, and quickly turns walking away. Do you follow the man or not?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
        nextButton.disabled = true;
    }

}
