const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const btnRock = document.querySelector('.rock')
const btnNextPlayer = document.querySelector('.next-player')
const btnResult = document.querySelector('.result')
const btnRestart = document.querySelector('.restart')

const titlePlayer = document.querySelector('.game-player')
const playerWinner = document.querySelector('.player-winner')

const circles = document.querySelectorAll('.circle')


const playersArr = []

let player = 1

let playerChoise = ''





// Step 1 - игрок выбирает вариант и он записывавется в переменную playerChoise
circles.forEach(function (circle) {

  circle.addEventListener('click', function () {

    circles.forEach(function (circle) {
      circle.classList.remove('active')
    })



    const circleClass = circle.classList[1]

    playerChoise = circleClass

    circle.classList.add('active')

    // console.log(playerChoise);

  })

})


// Step 2 - 
btnNextPlayer.addEventListener('click', function () {

  circles.forEach(function (circle) {
    circle.classList.remove('active')
  })

  playersArr.push(playerChoise)

  player++

  titlePlayer.textContent = 'Player 2'


  btnNextPlayer.style.display = 'none'

  btnResult.style.display = 'inline-block'


  // console.log(player);
  // console.log(playersArr);

})




btnResult.addEventListener('click', function () {

  circles.forEach(function (circle) {
    circle.classList.remove('active')
  })


  circles.forEach(function (circle) {
    circle.classList.add('end')
  })

  playersArr.push(playerChoise)

  btnResult.style.display = 'none'


  btnRestart.style.display = 'inline-block'

  // playerWinner.style.display = 'inline-block'



  if (playersArr[0] === 'paper' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Ничья'
    playerWinner.textContent = `None - restart please!`
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Paper VS Scissors'
    playerWinner.textContent = `Player 2 WIN!`
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Paper VS Rock'
    playerWinner.textContent = `Player 1 WIN!`
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Ничья'
    playerWinner.textContent = `None - restart please!`
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Scissors VS Rock'
    playerWinner.textContent = `Player 2 WIN!`
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Scissors VS Paper'
    playerWinner.textContent = `Player 1 WIN!`
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Ничья'
    playerWinner.textContent = `None - restart please!`
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Rock VS Scissors'
    playerWinner.textContent = `Player 1 WIN!`
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Rock VS Paper'
    playerWinner.textContent = `Player 2 WIN!`
  }




  console.log(playersArr);

  document.querySelector('.case3').style.display = 'none'

  document.querySelector('.action-paper').src = `images/icon-${playersArr[0]}.svg`
  document.querySelector('.action-scissors').src = `images/icon-${playersArr[1]}.svg`




})


btnRestart.addEventListener('click', function () {

  circles.forEach(function (circle) {
    circle.classList.remove('end')
  })

  titlePlayer.textContent = 'Player 1'

  playersArr.splice(0, 2)

  btnRestart.style.display = 'none'

  btnNextPlayer.style.display = 'inline-block'

  console.log(playersArr);

  document.querySelector('.case3').style.display = 'flex'


  playerWinner.textContent = ''




  document.querySelector('.action-paper').src = `images/icon-paper.svg`
  document.querySelector('.action-scissors').src = `images/icon-scissors.svg`


})



