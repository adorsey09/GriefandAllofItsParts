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
        number.innerHTML = "Before you can think any longer, a hand grabs you. The men from the van are back and are starting to drag you toward the warehouse entrance. Do you struggle or not?"
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
        number.innerHTML = "Before you can think any longer, a hand grabs you. The men from the van are back and are starting to drag you toward the warehouse entrance. Do you struggle or not?"
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
    }
}
