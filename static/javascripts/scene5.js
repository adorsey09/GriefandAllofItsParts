backButton = document.getElementById('back');
nextButton = document.getElementById('next');
number = document.getElementById('number');

// edit me
deleted = document.getElementById('delete');
appreciate = document.getElementById('appreciate');


var i = 1;
function ready() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    backButton.disabled = true;

    //edit me
    deleted = document.getElementById('delete');
    appreciate = document.getElementById('appreciate');

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
        number.innerHTML = "<br><i>You got this, caterpillar.<br><i> Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 2) {
        number.innerHTML = "<i>What are you doing?<i> You ask Grief. <br><i>One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.</i></br>";
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
        BackButton.disabled = true;
        number.innerHTML = "<br><i>You got this, caterpillar.<br><i> Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 2) {
        number.innerHTML = "<i>What are you doing?<i> You ask Grief. <br><i>One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.</i></br>";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';

    }

}
