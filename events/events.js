function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const luckyNumber = rand(0, 100)
const rolledNumbers = []

function rollBall () {
  let value = ''
  do {
    value = rand(0, 100)
  } while (rolledNumbers.includes(value))
  rolledNumbers.push(value)

  const color =
    value > 79
      ? 'green'
      : value > 59
      ? 'blue'
      : value > 39
      ? 'red'
      : value > 19
      ? 'yellow'
      : 'black'
  document.querySelector(
    '.ballBox'
  ).innerHTML += `<div class="ball ${color}">${value}</div>`
  if (value === luckyNumber) {
    document.querySelector(
      '.ballAction'
    ).innerHTML = `<div class="winText">SKAMBUTIS!</div><div class="ball ${color} winner">${value}</div>`
  }
}

document.querySelector('.ridenti').addEventListener('click', rollBall)
