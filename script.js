const rockEl = document.querySelector('#rock')
const paperEl = document.querySelector('#paper')
const scissorsEl = document.querySelector('#scissors')
let resultsEl = document.querySelector('#results')

rockEl.addEventListener('click', () => {
    playGame('🪨')
    playerEl.innerHTML = `
        <img src="./images/rock.png">
    `
})

paperEl.addEventListener('click', () => {
    playGame('📄')
    playerEl.innerHTML = `
        <img src="./images/file.png">
    `
})

scissorsEl.addEventListener('click', () => {
    playGame('✂️')
    playerEl.innerHTML = `
        <img src="./images/scissors.png">
    `
})

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 3)

    const choices = ['🪨', '📄', '✂️']
    const computerChoice = choices[randomNumber]

    if (computerChoice === '🪨') {
        computerEl.innerHTML = `
            <img src="./images/rock.png">
        `
    } else if (computerChoice === '📄') {
        computerEl.innerHTML = `
            <img src="./images/file.png">
        `
    } else {
        computerEl.innerHTML = `
            <img src="./images/scissors.png">
        `
    }

    return computerChoice
} // Creates a random number and makes a selection based on the number it gets

let userScore = document.querySelector('#user-score')
let computerScore = document.querySelector('#computer-score')
let tieScore = document.querySelector('#tie-score')

let playerEl = document.querySelector('.player')
let computerEl = document.querySelector('.computer')

let rockImg = document.querySelector('#rock-img')
let paperImg = document.querySelector('#paper-img')
let scissorsImg = document.querySelector('#scissors-img')

let roundResult = document.querySelector('.round-result')

let win = 0
let lose = 0
let tie = 0
function playGame(userChoice) {

    const computerChoice = getComputerChoice()
    let result

    if (userChoice === computerChoice) {
        result = `It's a tie!`
        tie++
        tieScore.textContent = tie
    } else if (
        (userChoice === '🪨' && computerChoice === '✂️') ||
        (userChoice === '📄' && computerChoice === '🪨') ||
        (userChoice === '✂️' && computerChoice === '📄') 
    ) {
        result = `You win!`
        win++
        userScore.textContent = win
    } else {
        result = 'You lose!'
        lose++
        computerScore.textContent = lose
    }

    roundResult.innerHTML = `
        <h2>
            ${result}
        </h2>
    `

    roundScore()    

} // Creates a new element using the user and computer selection and appends it to resultsEl, determines who wins the round and stores the result at the top

let rounds = document.querySelector('#round-score')

let round = 0
function roundScore() {

    const maxScore = 5

    if (win === maxScore) {
        playAgain()
        // clearInterval()

    } else if (lose === maxScore) {
        playAgain()
        // clearInterval()

    } else {
        round++
        rounds.textContent = round
    }

    if (win > maxScore || lose > maxScore) {
        win = 0
        lose = 0
        tie = 0

        userScore.textContent = win
        computerScore.textContent = lose

    } 

} // Sets the number of rounds being played and stops when reached the limit so that the user can restart the game

let selectionResult = document.querySelector('.selection-result')
let gameSection = document.querySelector('#game-section')

function playAgain() {
    const buttonEl = `
        <button id="playAgain-btn" class="play-again">
            Play Again
        </button>
    `
    gameSection.innerHTML = buttonEl

    const playAgainBtn = document.querySelector('#playAgain-btn')
    playAgainBtn.addEventListener('click', () => {
        return window.location.reload()
    })

} // Sets everything back to the beginning so that the user can start playing again
