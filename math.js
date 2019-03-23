let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let operator = ["+", "-", "*", "/"];
let randOp = Math.floor(Math.random() * 4);
let opPicked = operator[randOp];
let n1 = document.getElementById("n1");
let formButton = document.getElementById("formButton");

function changeOp () {
    n1.innerHTML = `${num1} ${opPicked} ${num2}`;
}

changeOp ();
// formButton.addEventListener('click', answer);


// function answer () {
//     let formAnswer = document.getElementById("answer");
//     if (opPicked === '+' && num1 + num2 === formAnswer) {
//         alert ('You got it correct!');
//     }
//     else if (opPicked === '-' && num1 - num2 === formAnswer) {
//         alert ('You got it correct!');
//     }
//     else if (opPicked === '*' && num1 * num2 === formAnswer) {
//         alert ('You got it correct!');
//     }
//     else if (opPicked === '/' && num1 / num2 === formAnswer) {
//         alert ('You got it correct!');
//     }
//     else {
//         alert ('Sorry, try again');
//     }
// }


let formAnswer = document.getElementById("answer");
console.log (formAnswer);