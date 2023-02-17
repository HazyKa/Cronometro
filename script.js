const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");


let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

startBtn.addEventListener("click", Timer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function Timer() {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function stopTimer() {
    clearInterval(interval);

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);

    seconds = "00";
    minutes = "00";
    hours = "00";

    secondsEl.textContent = seconds;
    minutesEl.textContent = minutes;
    hoursEl.textContent = hours;

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
}

function startTimer() {
    seconds++

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    if (hours === 24) {
        resetTimer;
    }

    if (seconds <= 9) { secondsEl.textContent = "0" + seconds }
    if (seconds > 9) { secondsEl.textContent = seconds }
    if (minutes <= 9) { minutesEl.textContent = "0" + minutes }
    if (minutes > 9) { minutesEl.textContent = minutes }
    if (hours > 9) { hoursEl.textContent = hours }
} 
