function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const start = setInterval(cubeMovement, 1000);

let player = 0;
let movements = 1;
let playerPoints = [];
let computerPoints = [];
let round = 1;

function cubeMovement() {
  const cube = document.querySelector('.cube');
  cube.style.top = `${rand(0, 550)}px`;
  cube.style.left = `${rand(0, 550)}px`;
  cube.style.backgroundColor = `rgb(${rand(40, 255)}, ${rand(40, 255)}, ${rand(
    40,
    255
  )})`;
  document.querySelector('.cube').addEventListener('click', pointCounter);
  movements++;
  if (movements === 5) newRound();
}

function stop() {
  clearInterval(start);
}
document.querySelector('.startRound').addEventListener('click', timer);
document.querySelector('.stop').addEventListener('click', stop);

function pointCounter(e) {
  e.preventDefault();
  player++;
  console.log(player);
  document.querySelector('.cube').removeEventListener('click', pointCounter);
}

function timer() {
  const gameTime = setInterval(ticking, 1000);
  let time = 5;
  function ticking() {
    const clock = document.querySelector('.timer');
    clock.textContent = `00:0${time}`;
    time === 0 ? clearInterval(gameTime) : time--;
  }
}

function newRound() {
  console.log('new round');
  const computer = movements - player;
  playerPoints.push(player);
  computerPoints.push(computer);
  const markup =
    player > computer
      ? `Žaidėjas surinkęs ${player} taškus`
      : `Kompiuteris surinkęs ${computer} taškus`;
  const info = document.querySelector('.information');
  info.innerHTML += `<div><strong>${round} raundą laimėjo: </strong>${markup}</div>`;
  player = 0;
  movements = 1;
  round++;
}
