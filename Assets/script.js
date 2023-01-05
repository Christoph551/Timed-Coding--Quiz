// Need to have a function display "Correct" in green font or "Incorrect in red font based off of the user's input."
// let timer = $('.Timer');
// let currentScore = $('.Current-Score');
// let main = $('.Container');
// let questionNumber = $('Question-Number');

let currentScore = function () {
    document.getElementById("#Current-Score").innerHTML = "Current Score: ";
    document.getElementById("#Current-Score").style.color = "white";
}


let correct = function () {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Correct!";
    document.getElementById("Correct-Answer-Feedback").style.color = "green";
    console.log("Correct!");
    return;
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

document.getElementById("startBtn").addEventListener("click", function() {
    console.log("start");
    document.getElementById("startUpDisplay").style.display = "block";
});

