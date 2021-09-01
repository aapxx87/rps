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



  if (playersArr[0] === 'paper' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Ничья'
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Player 2 win: Paper <- Scissors'
  } else if (playersArr[0] === 'paper' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Player 1 win: Paper -> Rock'
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Ничья'
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Player 2 win: Scissors <- Rock'
  } else if (playersArr[0] === 'scissors' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Player 1 win: Scissors -> Paper'
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'rock') {
    titlePlayer.textContent = 'Ничья'
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'scissors') {
    titlePlayer.textContent = 'Player 1 win: Rock -> Scissors'
  } else if (playersArr[0] === 'rock' && playersArr[1] === 'paper') {
    titlePlayer.textContent = 'Player 2 win: Rock <- Paper'
  }


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

})



