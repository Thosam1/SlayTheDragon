const squares = document.querySelectorAll('.square')     // linking to css using .
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')       // linking to html using #

let score = document.querySelector('#score') // using 'let' because it will change

// Start of the game
let result = 0
let hitPosition
let currentTime = 60
let timerId = null



function randomSquare() {

    squares.forEach(className => {
        className.classList.remove('mole') // we remove the mole from all squares (if they do not contain it, it passes)
    })

    let rdmPosition = squares[Math.floor(Math.random() * 9)] // random index 0-8
    rdmPosition.classList.add('mole') //adding the mole to that position

    // assigning the id of the rdm position to the hitPosition
    hitPosition = rdmPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition){
            result++
            score.textContent = result; // showing it via the html file
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)

        if(result <= 60){
            alert("Time's Up ! Your final score is : " + result + " You couldn't slay the drake, try again !")
        } else {
            alert("Time's Up ! Your final score is : " + result + " Good job ! You slayed the drake, now the people can live in peace !")
        }

    }
}


let countDownTimerId = setInterval(countDown, 1000)
