backButton = document.getElementById('back');
nextButton = document.getElementById('next');
number = document.getElementById('number');

// edit me
what = document.getElementById('what');
yes = document.getElementById('yes');
no = document.getElementById('no');


var i = 1;
function ready() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    backButton.disabled = true;

    //edit me
    what = document.getElementById('what');
    yes = document.getElementById('yes');
    no = document.getElementById('no');

}

function next() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    what = document.getElementById('what');
    yes = document.getElementById('yes');
    no = document.getElementById('no');

    backButton.disabled = false;

    //edit text here

    what.style.visibility = 'visible';
    yes.style.visibility = 'visible';
    no.style.visibility = 'visible';

    // edit mm
    nextButton.disabled = true;
    i++;

}

function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    what = document.getElementById('what');
    yes = document.getElementById('yes');
    no = document.getElementById('no');

    nextButton.disabled = false;
    i--;
    //edit me
    backButton.disabled = true;

    what.style.visibility = 'visible';
    yes.style.visibility = 'visible';
    no.style.visibility = 'visible';



}
