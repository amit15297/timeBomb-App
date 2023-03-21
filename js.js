let timerElement = document.getElementById("timer");
let difuserElement = document.getElementById("defuser");

let countdown = 10;
let intervalID = setInterval(function() {
    countdown = countdown - 1;
    timerElement.textContent = countdown;
    var x = document.getElementById("myAudio"); 
    if (countdown === 0) {
        timerElement.textContent = "BOOM!!"
        x.play(); 
        clearInterval(intervalID)
        }
      }, 1000);

difuserElement.addEventListener("keydown", function(event) {
    let bombDefuserText = difuserElement.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerElement.textContent = "You Did it!!"
        clearInterval(intervalID)
    }
});