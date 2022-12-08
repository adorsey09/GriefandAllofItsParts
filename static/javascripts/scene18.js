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

    //edit me
    backButton.disabled = false;

    //edit text here
    if (i==1) {
        number.innerHTML = "Your journey ends here with Grief and NOVO Tech. You live a normal life. You graduate and get a job. You have a family. Every once in a while you’ll see something new about NOVO Tech on the news.";
    } else if (i == 2) {
        number.innerHTML = "And sometimes, you think you’re eyes deceive as you see a text saying: <i>Hi, I hope you’re well. Murderer. </i> <strong> THE END </strong>";
        nextButton.disabled = true;
    }
    i++;

}

function back() {
    backButton = document.getElementById('back');
    nextButton = document.getElementById('next');
    number = document.getElementById('text');

    //edit me
    yes = document.getElementById('yes');
    no = document.getElementById('no');

    nextButton.disabled = false;
    i--;
    //edit me

    if (i==1) {
        BackButton.disabled = true;
        number.innerHTML = "Your journey ends here with Grief and NOVO Tech. You live a normal life. You graduate and get a job. You have a family. Every once in a while you’ll see something new about NOVO Tech on the news.";
    } else if (i == 2) {
        number.innerHTML = "And sometimes, you think you’re eyes deceive as you see a text saying: <i>Hi, I hope you’re well. Murderer. </i> <strong> THE END </strong>";
    }
}
