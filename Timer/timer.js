let countingTimer; //Intervalui pasiekti i6valymui
let countMinutesTimer = 10;
let countSecondsTimer = 0;
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const timeScale = document.querySelector('.controlButtons');

let timepercentagePerSecPassed = 0;
let timepercentagePerSec = 100 / (countMinutesTimer * 60 + countSecondsTimer);
console.log(typeof timepercentagePerSec);
function timerCounting() {
  countingTimer = setInterval(() => {
    countSecondsTimer--;
    seconds.textContent = countSecondsTimer;
    if (countSecondsTimer === -1) {
      countMinutesTimer--;
      minutes.textContent = countMinutesTimer;
      countSecondsTimer = 59;
      seconds.textContent = countSecondsTimer;
    }
    if (countMinutesTimer === 0 && countSecondsTimer === 0) {
      stopTimerCounting();
    }
    timepercentagePerSecPassed =
      timepercentagePerSecPassed + timepercentagePerSec;
    console.log(timepercentagePerSec);
    timeScale.style.setProperty(
      '--timePassed',
      `${timepercentagePerSecPassed}%`
    );
  }, 1000);
  start.removeEventListener('click', timerCounting);
  start.classList.add('hidden');
  pausing.classList.remove('hidden');
}

function stopTimerCounting() {
  clearInterval(countingTimer);
}

function timerReseting() {
  stopTimerCounting();
  countMinutesTimer = 10;
  countSecondsTimer = 0;
  minutes.textContent = countMinutesTimer;
  seconds.textContent = '00';
  start.addEventListener('click', timerCounting);
  start.classList.remove('hidden');
  pausing.classList.add('hidden');
  timeScale.style.setProperty('--timePassed', `0%`);
}
function timerPause() {
  stopTimerCounting();
  start.addEventListener('click', timerCounting);
  start.classList.remove('hidden');
  pausing.classList.add('hidden');
}

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pausing = document.querySelector('.stop');

start.addEventListener('click', timerCounting);
reset.addEventListener('click', timerReseting);
pausing.addEventListener('click', timerPause);

const timerFunctionButton = document.querySelector('.timer');
const stopwatchFunctionButton = document.querySelector('.stopwatch');

const timerDisplay = document.querySelector('.timer-display');
const stopwatchDisplay = document.querySelector('.stopwatch-display');

timerFunctionButton.addEventListener('click', () => {
  start.addEventListener('click', timerCounting);
  reset.addEventListener('click', timerReseting);
  pausing.addEventListener('click', timerPause);
  stopwatchDisplay.classList.add('hidden');
  timerDisplay.classList.remove('hidden');
  timerFunctionButton.classList.add('active');
  stopwatchFunctionButton.classList.remove('active');
});

let stopwatchCounting; //Intervalui pasiekti i6valymui
let countMilisecondsStopwatch = 0;
let countSecondsStopwach = 0;
let countMinutesStopwatch = 0;
const miliseconds = document.querySelector('.miliseconds');
const secondsStopwatch = document.querySelector('.secondsStop');
const minutesStopwatch = document.querySelector('.minutesStop');
const minutesFieldStopwatch = document.querySelector('.minutesStopwatch');

function stopwatch() {
  stopwatchCounting = setInterval(() => {
    countMilisecondsStopwatch++;
    miliseconds.textContent = countMilisecondsStopwatch;
    if (countMilisecondsStopwatch === 100) {
      countMilisecondsStopwatch = 0;
      miliseconds.textContent = countMilisecondsStopwatch;
      countSecondsStopwach++;
      secondsStopwatch.textContent = countSecondsStopwach;
    }
    if (countSecondsStopwach === 60) {
      countMinutesStopwatch++;
      minutesStopwatch.textContent = countMinutesStopwatch;
      minutesFieldStopwatch.classList.remove('hidden');
      countSecondsStopwach = 0;
      secondsStopwatch.textContent = countSecondsStopwach;
    }
  }, 10);
}

function stopwatchReset() {
  clearInterval(stopwatchCounting);
  countMilisecondsStopwatch = 0;
  countSecondsStopwach = 0;
  countMinutesStopwatch = 0;
  miliseconds.textContent = countMilisecondsStopwatch;
  secondsStopwatch.textContent = countSecondsStopwach;
  minutesStopwatch.textContent = countMinutesStopwatch;
  minutesFieldStopwatch.classList.add('hidden');
}

function stopwatchPause() {
  clearInterval(stopwatchCounting);
  start.addEventListener('click', stopwatch);
  start.classList.remove('hidden');
  pausing.classList.add('hidden');
}

stopwatchFunctionButton.addEventListener('click', () => {
  start.addEventListener('click', stopwatch);
  reset.addEventListener('click', stopwatchReset);
  pausing.addEventListener('click', stopwatchPause);
  stopwatchDisplay.classList.remove('hidden');
  timerDisplay.classList.add('hidden');
  timerFunctionButton.classList.remove('active');
  stopwatchFunctionButton.classList.add('active');
});

// .controlButtons --timePassed: 12%;
