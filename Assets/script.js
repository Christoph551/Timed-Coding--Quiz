// Need to have a function display "Correct" in green font or "Incorrect in red font based off of the user's input."

const correct = true;
const incorrect = false;
let Button1 = 0;
let Button2 = 1;
let Button3 = 2;
let Button4 = 3;

function correctAnswer() {
    if (correct) {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Correct!";
    document.getElementById("Correct-Answer-Feedback").style.color = "green";
    }
} 

// document.getElementById("Button1").addEventListener("click", incorrectAnswer);
// function incorrectAnswer() {
//     document.getElementById("Inorrect-Answer-Feedback").innerHTML = "Incorrect!";
//     document.getElementById("Inorrect-Answer-Feedback").style.color = "red"
//     console.log("Incorrect");
// }

document.getElementById("Button4").addEventListener("click", correctAnswer);