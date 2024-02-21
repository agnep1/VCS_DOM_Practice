let initialTime = 5;
let seconds = initialTime;
let timer;
let running = false;
let starts = document.querySelector('.start');
const displayTime = () => {
  document.querySelector('.minutes').textContent = Math.floor(seconds / 60);
  document.querySelector('.seconds').textContent = seconds % 60;
};
displayTime();

const start = (e) => {
  starts.textContent = starts.textContent === 'start' ? 'STOP' : 'start';
  console.log(document.querySelector('.start').textContent);
  if (running) {
    clearInterval(timer);
    running = false;
    return;
  }
  running = true;
  timer = setInterval(() => {
    seconds--;
    displayTime();
    if (seconds === 0) {
      starts.textContent = 'OK';
      starts.disabled = true;
      clearInterval(timer);
      return;
    }
  }, 1000);
};
const restart = (e) => {
  starts.disabled = false;
  running = false;
  seconds = initialTime;
  starts.textContent = `START`;
  clearInterval(timer);
  displayTime();
};
