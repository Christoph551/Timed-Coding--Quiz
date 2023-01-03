document.getElementById("Button4").addEventListener("click", correctAnswer);
function correctAnswer() {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Correct!";
    document.getElementById("Correct-Answer-Feedback").style.color = "green"
}

document.getElementById("Button1").addEventListener("click", incorrectAnswer);
function incorrectAnswer() {
    document.getElementById("Inorrect-Answer-Feedback").innerHTML = "Incorrect!";
    document.getElementById("Inorrect-Answer-Feedback").style.color = "red"
}