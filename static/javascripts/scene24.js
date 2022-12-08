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
        number.innerHTML = "You don’t see him for a couple of days. You are walking to class when he walks up to you.'You and I have to leave?''What? Why?''I’ll explain everything soon, but first, we need to go.'Before you can ask more questions, a black van pulls up next to the road. People dressed in black exit the vehicle and grab your dad.'Dad!''Just go!'They drag him into the vehicle, and start to drive off. Do you follow them or not?";
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
        number.innerHTML = "You don’t see him for a couple of days. You are walking to class when he walks up to you.'You and I have to leave?''What? Why?''I’ll explain everything soon, but first, we need to go.'Before you can ask more questions, a black van pulls up next to the road. People dressed in black exit the vehicle and grab your dad.'Dad!''Just go!'They drag him into the vehicle, and start to drive off. Do you follow them or not?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
        nextButton.disabled = true;
    }
}
