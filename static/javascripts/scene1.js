// getting buttons and text from HTML (needed this in all functions for buttons to work)
backButton = document.getElementById('back');
nextButton = document.getElementById('next');
number = document.getElementById('number');
choice1 = document.getElementById('choice1');
choice2 = document.getElementById('choice2');

//declaring variable for next and back functions
var i = 1;

//function for body when page is loaded
function ready() {

    //getting buttons and text from HTML
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');

    //disabling back button when loaded
    backButton.disabled = true;
}

// function for next button
function next() {
    //getting buttons and text from HTML
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');

    //un-disabling back button
    backButton.disabled = false;

    //changing the text based on what the value of i is
    if (i == 1) {
        number.innerHTML = "Grief is a strange sensation. You weren’t even sure if you were experiencing grief for the first month after his funeral. You quickly returned to college not knowing what else to do. You weren’t sad or angry or bitter. You were just kind of empty.";
    } else if (i == 2) {
        number.innerHTML = "A week had passed after your return to college when you got an ad from an unknown message on my phone. It read:<br><i>Have you recently experienced the death of a loved one? Are you having a hard time transitioning from a life with them to a life without them? Then try NOVO Tech’s new sentient AI: <strong>Grief</strong>. Grief is designed to help you move on and work through your stages of grief. The best part is that it’s free. Go to <u>novo/grief.com</u> to sign up.</i></br>";
    } else if (i == 3) {
        number.innerHTML = "The link takes you to NOVO Tech’s website. NOVO Tech was a huge technology conglomerate that specialized in AI and machine learning. It was the first company to have an actual sentient AI (although some critics don’t believe that they are sentient), and the first company to market them.";
    } else if (i == 4) {
        number.innerHTML = "You clicked the sign up button, so far this seemed legit. They weren’t asking for your credit card or your social security number. You filled out the form that was asking for basic information - your name, your address, and email address. A sharp breath hits you as you see the last question ask <br><i>“Who are you grieving?”</i></br>";
    } else if (i == 5) {
        number.innerHTML = "You type <i>“Father”</i> quickly and click <i>“Next”</i> before getting too deep into those thoughts. Dwelling on them would only make you cry. A few minutes later you hear a ‘ping’ alerting you of an email. You download the app and see that it's a pretty standard chatbot app.";
    } else if (i == 6) {
        number.innerHTML = "<i>Hello. I’m Grief, your friend to help you through this difficult time. The grieving process is, unfortunately, something we must all go through. However, it can look different for many people. So, what would you like to talk about today?</i>";
    } else if (i == 7) {
        number.innerHTML = "You don’t respond seeing the time and decide to head to class. As you walk to class, you pass an older man that is wearing the same shirt you’ve seen your dad in? It can’t be right? <br>You look at the man sitting on the bench again. He looks exactly like your dad. You stop dead in your tracks. You must be losing your mind. There’s no way. But it’s definitely him or is it?</br> <br>Do you walk up to the man or do you just keep walking?</br>";

        //making the choice buttons visible once at the end of the text
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';

        //allowing the next button to be disabled once reaching the end
        nextButton.disabled = true;
    }

    //adding one to i
    i++;

}

//function for back button
function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');
    choice1 = document.getElementById('choice1');
    choice2 = document.getElementById('choice2');

    //un-disabling the next button
    nextButton.disabled = false;

    //subtrating 1 from i
    i--;

    //changing text based on what i equals
    if (i == 1) {
        number.innerHTML = "Grief is a strange sensation. You weren’t even sure if you were experiencing grief for the first month after his funeral. You quickly returned to college not knowing what else to do. You weren’t sad or angry or bitter. You were just kind of empty.";
    } else if (i == 2) {
        number.innerHTML = "A week had passed after your return to college when you got an ad from an unknown message on my phone. It read:<br><i>Have you recently experienced the death of a loved one? Are you having a hard time transitioning from a life with them to a life without them? Then try NOVO Tech’s new sentient AI: <strong>Grief</strong>. Grief is designed to help you move on and work through your stages of grief. The best part is that it’s free. Go to <u>novo/grief.com</u> to sign up.</i></br>";
    } else if (i == 3) {
        number.innerHTML = "The link takes you to NOVO Tech’s website. NOVO Tech was a huge technology conglomerate that specialized in AI and machine learning. It was the first company to have an actual sentient AI (although some critics don’t believe that they are sentient), and the first company to market them.";
    } else if (i == 4) {
        number.innerHTML = "You clicked the sign up button, so far this seemed legit. They weren’t asking for your credit card or your social security number. You filled out the form that was asking for basic information - your name, your address, and email address. A sharp breath hits you as you see the last question ask <br><i>“Who are you grieving?”</i></br>";
    } else if (i == 5) {
        number.innerHTML = "You type <i>“Father”</i> quickly and click <i>“Next”</i> before getting too deep into those thoughts. Dwelling on them would only make you cry. A few minutes later you hear a ‘ping’ alerting you of an email. You download the app and see that it's a pretty standard chatbot app.";
    } else if (i == 6) {
        number.innerHTML = "<i>Hello.</i> <i>I’m Grief, your friend to help you through this difficult time. The grieving process is, unfortunately, something we must all go through. However, it can look different for many people. So, what would you like to talk about today?</i>";
    } else if (i == 7) {
        number.innerHTML = "You don’t respond seeing the time and decide to head to class. As you walk to class, you pass an older man that is wearing the same shirt you’ve seen your dad in? It can’t be right? <br>You look at the man sitting on the bench again. He looks exactly like your dad. You stop dead in your tracks. You must be losing your mind. There’s no way. But it’s definitely him or is it?</br> <br>Do you walk up to the man or do you just keep walking?</br>";

        //allowing choice buttons to be visible once reaching the end
        choice1.style.visibility = 'visible';
        choice2.style.visibility = 'visible';

        //disabling next button once reaching the end
        nextButton.disabled = true;
    }
}
