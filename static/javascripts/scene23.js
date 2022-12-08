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
        number.innerHTML = "Now, you are officially losing your mind. But your dad is dead. How is he back? 'Are you real?''Uh, yes.''But I was at your funeral.''My funeral, but I did not die?''Yes you did. You died. I saw your dead body in the coffin.''But I am right here. My body is right here.'";
    } else if (i == 2) {
        number.innerHTML = "You help your dad stand, but in the fall you see that he skinned his elbow. However, instead of the normal skin and blood, you see that his skin is peeled back revealing a shiny white metal texture. 'Dad, what is that?'Your dad looks at his elbow.Your dad stares at this elbow and then looks at you.'What am I?' What do you?";
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
        backButton.disabled = true;
        number.innerHTML = "Now, you are officially losing your mind. But your dad is dead. How is he back? 'Are you real?''Uh, yes.''But I was at your funeral.''My funeral, but I did not die?''Yes you did. You died. I saw your dead body in the coffin.''But I am right here. My body is right here.'";
    } else if (i == 2) {
        number.innerHTML = "You help your dad stand, but in the fall you see that he skinned his elbow. However, instead of the normal skin and blood, you see that his skin is peeled back revealing a shiny white metal texture. 'Dad, what is that?'Your dad looks at his elbow.Your dad stares at this elbow and then looks at you.'What am I?' What do you?";
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';

    }

}
