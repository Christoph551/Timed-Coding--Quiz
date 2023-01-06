const button1 = 1;
const button2 = 2;
const button3 = 3;
const button4 = 4;
let startTime;


let highScores = function () {
    
}






// document.getElementById("View-High-Scores").addEventListener("click", highScores) 
// document.getElementById("View-High-Scores").style.display = "block";


// Function to add an event listener to the Start Button.  
// Initially have <main> displayed to none. Then this function will display <main> which contains the questions and answer options.
// This function will then display the current timer and count down from 60.
document.getElementById("startBtn").addEventListener("click", function() {
    console.log("start");
    document.getElementById("startUpDisplay").style.display = "block";
    let currentTime = 30;
    let timeLeft = setInterval(timer, 1000);
        function timer(){
            (currentTime = currentTime - 1);
        }
        if (timeLeft <= currentTime) {
            document.getElementById("Current-Score").innerHTML = currentTime + " Seconds on the clock!"
            document.getElementById("startBtn").style.display = "none";
        } else if (currentTime === 0) {
            window.alert("You have run out of time. Press `OK` to save your score");
        }
        if (count = 0) { // This does not appear to be working at the moment. Console log firing back a syntax error
            clearInterval(currentTime);
        }
    }
);




            // Correct answer function to diplay text and stylize that added text.
// Will need to call this function when building the algorithm to randomize questions.
let correct = function () {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Correct!";
    document.getElementById("Correct-Answer-Feedback").style.color = "green";
    console.log("Correct!");
    return;
} 

// Incorrect answer function to diplay text and stylize that added text.
// Will need to call this function when building the algorithm to randomize questions.
let incorrect = function () {
    document.getElementById("Correct-Answer-Feedback").innerHTML = "Incorrect!";
    document.getElementById("Correct-Answer-Feedback").style.color = "red";
    console.log("Incorrect!");
} 


// These event listeners do not have any logic applied to which button will be the correct answer. 
// They are calling to the correct/incorrect functions to both display and style the font for when an answer is right or wrong.
document.getElementById("Button1").addEventListener("click", incorrect); 
document.getElementById("Button2").addEventListener("click", incorrect); 
document.getElementById("Button3").addEventListener("click", incorrect); 
document.getElementById("Button4").addEventListener("click", correct); 