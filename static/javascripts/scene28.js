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
        number.innerHTML = "“I think we are them.” Your dad talks to you and gestures toward the lined up robots.'How do you know?''Look at their wrist' You see the same blue barcode on all the robots’ wrists lined up in front of you.'I’m…. I’m not human?'So then what exactly were you? <strong>THE END</strong>";
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
        number.innerHTML = "“I think we are them.” Your dad talks to you and gestures toward the lined up robots.'How do you know?''Look at their wrist' You see the same blue barcode on all the robots’ wrists lined up in front of you.'I’m…. I’m not human?'So then what exactly were you? <strong>THE END</strong>";
        nextButton.disabled = true;
    }
}
