let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let operator = ["+", "-", "*",];
let randOp = Math.floor(Math.random() * 3);
let opPicked = operator[randOp];
let n1 = document.getElementById("n1");
let formAnswer = document.getElementById("formAnswer");

function changeOp () {
    n1.innerHTML = `${num1} ${opPicked} ${num2}`;
}

changeOp ();
formButton.addEventListener('click', answer);


function answer () {
    let x = formAnswer.value;
    if (opPicked === '+' && num1 + num2 == x) {
        alert ('You got it correct!');
        return true;
    }
    else if (opPicked === '-' && num1 - num2 == x) {
        alert ('You got it correct!');
        return true;
    }
    else if (opPicked === '*' && num1 * num2 == x) {
        alert ('You got it correct!');
        return true;
    }
    else {
        alert ('Sorry, that answer is incorrect. Please try again');
        return false;
    }
}

