backButton = document.getElementById('back');
nextButton = document.getElementById('next');
number = document.getElementById('number');


var i = 1;
function ready() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    backButton.disabled = true;

}

function next() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');


    backButton.disabled = false;

    //edit text here
    if (i == 1) {
        nextButton.disabled = true;
    }

    i++;

}

function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    nextButton.disabled = false;
    i--;
    //edit me

    if (i == 1) {
        nextButton.disabled = true;
    }
}
