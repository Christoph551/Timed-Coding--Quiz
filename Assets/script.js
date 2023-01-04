// Need to have a function display "Correct" in green font or "Incorrect in red font based off of the user's input."
const right = 0;
const wrong = 1;
let answer = [];

let correct = function () {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Correct!";
    document.getElementById("Correct-Answer-Feedback").style.color = "green";
    console.log("Correct!");
} 

let incorrect = function () {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Incorrect!";
    document.getElementById("Correct-Answer-Feedback").style.color = "red";
    console.log("Incorrect!");
} 



document.getElementById("Button1").addEventListener("click", incorrect);
document.getElementById("Button2").addEventListener("click", incorrect);
document.getElementById("Button3").addEventListener("click", incorrect);
document.getElementById("Button4").addEventListener("click", correct);