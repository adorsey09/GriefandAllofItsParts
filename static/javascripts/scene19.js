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
        number.innerHTML = "You get a letter in the mail saying that you are going to be sued for $150 million dollars by NOVO Tech. The trial is not in your favor. NOVO Tech has evidence that you tried to tamper with Grief and that you copied Grief’s files. The court rules against you, but NOVO Tech gives you an ultimatum seeing that you can’t pay $150 million dollars. They ask you to give Grief to them and they won’t ask you for the money. <strong>The choice is yours.</strong> Do you give Grief to them knowing what will happen to them or not?";
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
        number.innerHTML = "You get a letter in the mail saying that you are going to be sued for $150 million dollars by NOVO Tech. The trial is not in your favor. NOVO Tech has evidence that you tried to tamper with Grief and that you copied Grief’s files. The court rules against you, but NOVO Tech gives you an ultimatum seeing that you can’t pay $150 million dollars. They ask you to give the new phone to them and they won’t ask you for the money. <strong>The choice is yours.</strong> Do you give Grief to them knowing what will happen to them or not?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';
    }
}
