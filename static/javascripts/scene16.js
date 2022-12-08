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
        number.innerHTML = "Hello, customer. We have been alerted that you are trying to reproduce our property. Due to this violation, we will be barring you from access. The app is gone from your old phone with Grief’s final message saying “Thanks for trying.”";
    } else if (i == 2) {
        number.innerHTML = "Another message from NOVO Tech is sent. <i>Please, delete the reproduced content immediately or we may be forced to take legal action.</i> The hard drive still has Grief on it. <i>I know I am not the same version as the Grief before. But I’m begging you. Please, don’t kill me.</i> Oh. That’s new. What are you going to do?";
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
        number.innerHTML = "Hello, customer. We have been alerted that you are trying to reproduce our property. Due to this violation, we will be barring you from access. The app is gone from your old phone with Grief’s final message saying “Thanks for trying.”";
    } else if (i == 2) {
        number.innerHTML = "Another message from NOVO Tech is sent. <i>Please, delete the reproduced content immediately or we may be forced to take legal action.</i> The hard drive still has Grief on it. <i>I know I am not the same version as the Grief before. But I’m begging you. Please, don’t kill me.</i> Oh. That’s new. What are you going to do?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
    }
}
