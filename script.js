const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const btnRock = document.querySelector('.rock')
const btnNextPlayer = document.querySelector('.next-player')
const btnResult = document.querySelector('.result')
const btnRestart = document.querySelector('.restart')

const titlePlayer = document.querySelector('.game-player')

const circles = document.querySelectorAll('.circle')


const playersArr = []

let player = 1

let playerChoise = ''



// Step 1 - игрок выбирает вариант и он записывавется в переменную playerChoise
circles.forEach(function (circle) {

  circle.addEventListener('click', function () {

    const circleClass = circle.classList[1]

    playerChoise = circleClass

    console.log(playerChoise);

  })

})


// Step 2 - 
btnNextPlayer.addEventListener('click', function () {

  playersArr.push(playerChoise)

  player++

  titlePlayer.textContent = 'Player 2'


  btnNextPlayer.style.display = 'none'

  btnResult.style.display = 'inline-block'


  console.log(player);
  console.log(playersArr);

})




btnResult.addEventListener('click', function () {

  playersArr.push(playerChoise)

  btnResult.style.display = 'none'


  btnRestart.style.display = 'inline-block'



  if (playersArr[0] === 'paper' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Ничья: Paper VS Paper'
    console.log('Ничья');
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Player 2 win: Paper VS Scissors'
    console.log('Player 2 win');
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Player 1 win: Paper VS Rock'

    console.log('Player 1 win');
  }


})



