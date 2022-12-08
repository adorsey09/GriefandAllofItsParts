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
    if (i==1) {

        number.innerHTML = "Your journey ends here with Grief. You live a very poor and frugal life as you work to pay NOVO Tech the $150 million dollars. In so much debt, you resort to more illegal activities such as making and selling drugs (you did study chemistry in college after all).Every once in a while you’ll see something new about NOVO Tech on the news like the new maid robot. One day, you sell drugs to the wrong person and end up getting busted. You go to prison for 20 years.";
    } else if (i ==2) {
        number.innerHTML = "“This is your new roommate.” The prison guard says as a new person walks in. They say your name before you can.<br>“What..?”</br><br><i>'My name is Grief.'</br><br></i><strong>THE END.<strong></br>";
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
    if (i==1) {
        backButton.disabled = true;
        number.innerHTML = "Your journey ends here with Grief. You live a very poor and frugal life as you work to pay NOVO Tech the $150 million dollars. In so much debt, you resort to more illegal activities such as making and selling drugs (you did study chemistry in college after all).Every once in a while you’ll see something new about NOVO Tech on the news like the new maid robot. One day, you sell drugs to the wrong person and end up getting busted. You go to prison for 20 years.";
    } else if (i ==2) {
        number.innerHTML = "“This is your new roommate.” The prison guard says as a new person walks in. They say your name before you can.<br>“What..?”</br><br><i>“Grief.”</br><br></i><strong>THE END.<strong></br>";
    }
}
