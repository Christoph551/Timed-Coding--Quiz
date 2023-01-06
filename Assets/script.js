const button1 = 1;
const button2 = 2;
const button3 = 3;
const button4 = 4;
let startTime;

// Function to add an event listener to the Start Button.  
// Initially have <main> displayed to none. Then this function will display <main> which contains the questions and answer options.
// This function will then display the current timer and count down from 60.
document.getElementById("startBtn").addEventListener("click", function() {
    console.log("start");
    document.getElementById("startUpDisplay").style.display = "block";
    currentTime = 30;
    let timeLeft = setInterval(timer, 1000);
        function timer(){
            currentTime = currentTime - 1;
            if (count <= 0) { // This does not appear to be working at the moment. Console log firing back a syntax error
                clearInterval(currentTime);
                return;
            } 
    }
    let startTime = currentTime + " Seconds on the clock!";
    if (timeLeft = startTime) {
    document.getElementById("Current-Score").innerHTML = startTime;
    document.getElementById("startBtn").style.display = "none";
        } else if (currentTime === 0) {
        window.alert("You have run out of time. Press `OK` to save your score");
        }
    return;
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