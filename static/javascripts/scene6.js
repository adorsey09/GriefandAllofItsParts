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
    deleted = document.getElementById('delete');
    appreciate = document.getElementById('appreciate');

    backButton.disabled = false;

    if (i==1) {
        number.innerHTML = "<i>What do you mean?<i> You text back. <br>Did Grief somehow know that you mistakenly thought a man was your dead dad?</br> <br><i>I’m regularly programmed to check in with you. How are you doing today?</i></br> <br><i>Oh, gotcha. I’m okay.</i></br> <br>The timing was odd, but it was most likely a coincidence.</br>";
    } else if (i == 2) {
        number.innerHTML = "<br>You quickly move on from the experience as you enter the lecture hall. You didn’t particularly enjoy this class, but it was considered an easy class so you decided to take it. As you surf the web on your computer, you get a notification.<br> <br><i>You got this, caterpillar.</br></i> Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 3) {
        number.innerHTML = "<br><i>What are you doing?</br></i> You ask Grief. <br><i>One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.</br></i> </br></i>Please, don’t use that nickname again. I’ll figure this out in my own time.</br></i> <br><i>Sorry. I didn’t mean to make you feel uncomfortable. However, if you let me help you this process could be a lot easier. It’s not good to bottle up your feelings, especially ones like grief.</br></i>";
        deleted.style.visibility = 'visible';
        appreciate.style.visibility = 'visible';
        nextButton.disabled = true;
    }
    i++;

}

function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    deleted = document.getElementById('delete');
    appreciate = document.getElementById('appreciate');

    nextButton.disabled = false;
    i--;
    //edit me

    if (i==1) {
        BackButton.disabled = true;
        number.innerHTML = "<i>What do you mean?<i> You text back. <br>Did Grief somehow know that you mistakenly thought a man was your dead dad?</br> <br><i>I’m regularly programmed to check in with you. How are you doing today?</i></br> <br><i>Oh, gotcha. I’m okay.</i></br> <br>The timing was odd, but it was most likely a coincidence.</br>";
    } else if (i == 2) {
        number.innerHTML = "<br>You quickly move on from the experience as you enter the lecture hall. You didn’t particularly enjoy this class, but it was considered an easy class so you decided to take it. As you surf the web on your computer, you get a notification.<br> <br><i>You got this, caterpillar.</br></i> Your heart drops. Only your dad ever used that nickname with you. You frantically get out your phone to check. It was just Grief. It must have read the texts that you and your dad would send to one another. Now, you are really about to have a breakdown. First, thinking you saw your dad on your way to class and now thinking your dad was texting you.";
    } else if (i == 3) {
        number.innerHTML = "<br><i>What are you doing?</br></i> You ask Grief. <br><i>One of my purposes is to help you transition from a life with your father to one without. Research shows that saying things or using nicknames that you have associated with someone who has passed can help.</br></i> </br></i>Please, don’t use that nickname again. I’ll figure this out in my own time.</br></i> <br><i>Sorry. I didn’t mean to make you feel uncomfortable. However, if you let me help you this process could be a lot easier. It’s not good to bottle up your feelings, especially ones like grief.</br></i>";
        deleted.style.visibility = 'visible';
        appreciate.style.visibility = 'visible';

    }


}
