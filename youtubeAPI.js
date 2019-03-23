// Using Fecth
const entertainURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL0FeOu0VtegcbplQ3bZ2SgjKVwsb-GxpJ&key=AIzaSyBWl800UrBjg3uVTtb9qPHTVuJywVDeaj0'
const eduURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL0FeOu0VtegcevmxMM6hnmmlTFycHZ3Zb&key=AIzaSyBWl800UrBjg3uVTtb9qPHTVuJywVDeaj0'

let eduVids = [];
let entVids = [];

let operator = ["+", "-", "*",];
let equation = document.getElementById("equation");
let formAnswer = document.getElementById("formAnswer");
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let randOp = Math.floor(Math.random() * 3);
let opPicked = operator[randOp];

function changeEquation() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    randOp = Math.floor(Math.random() * 3);
    opPicked = operator[randOp];
    equation.innerHTML = `${num1} ${opPicked} ${num2}`;
    formAnswer.value = '';
}


let isCorrect;

function checkAnswer() {
    let x = formAnswer.value;
    if (opPicked === '+' && num1 + num2 == x) {
        alert(`Good Job! \n ${equation.innerHTML} = ${x} \n is correct!`);
        isCorrect = true;
    }
    else if (opPicked === '-' && num1 - num2 == x) {
        alert(`Good Job! \n ${equation.innerHTML} = ${x} \n is correct!`);
        isCorrect = true;
    }
    else if (opPicked === '*' && num1 * num2 == x) {
        alert(`Good Job! \n ${equation.innerHTML} = ${x} \n is correct!`);
        isCorrect = true;
    }
    else {
        alert(`Oops, try again! \n ${equation.innerHTML} = ${x} \n is incorrect!`);
        isCorrect = false;
    }
    formAnswer.value = '';


    if (isCorrect) {
        changeEquation();


        const videoContainer = document.getElementById('video-container');

        videoContainer.innerHTML = `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/${eduVids.pop()}"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`
    }
};




fetch(entertainURL, { method: "GET" })
    .then(res => res.json())
    .then(response => {
        // console.log(response.items)//.snippet)
        for (let snip of response.items) {
            // console.log(snip.snippet.resourceId.videoId);
            entVids.push(snip.snippet.resourceId.videoId);
        }
        console.log(entVids);
    })
//   .catch(error => console.error('Error:', error));

fetch(eduURL, { method: "GET" })
    .then(res => res.json())
    .then(response => {
        // console.log(response.items)//.snippet)
        for (let snip of response.items) {
            // console.log(snip.snippet.resourceId.videoId);
            eduVids.push(snip.snippet.resourceId.videoId);
        }
        console.log(eduVids);
    })

changeEquation();
formButton.addEventListener('click', checkAnswer);


