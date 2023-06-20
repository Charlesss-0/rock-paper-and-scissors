const rockEl = document.querySelector('#rock')
const paperEl = document.querySelector('#paper')
const scissorsEl = document.querySelector('#scissors')
let resultsEl = document.querySelector('#results')

rockEl.addEventListener('click', () => {
    playGame('rock')
    gameScore('rock')
    // clearRound()
})

paperEl.addEventListener('click', () => {
    playGame('paper')
    gameScore('paper')
    // clearRound()
})

scissorsEl.addEventListener('click', () => {
    playGame('scissors')
    gameScore('paper')
    // clearRound()
})

let round = 1

function getComputerChoice() {
    const computerChoice = Math.floor( Math.random() * 3 ) + 1

    if (computerChoice === 1) {
        return 'rock'
    } else if (computerChoice === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice()

    const selection = document.createElement('p')
    selection.classList.add('user-select')
    selection.textContent = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1) } vs ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
    resultsEl.appendChild(selection)
} // Creates a new element using the user and computer selection and appends it to resultsEl

function gameScore(userChoice) {
    const computerChoice = getComputerChoice()
    let result

    if (userChoice === computerChoice) {
        result = `It's a tie!`
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        result = `You win!`
    } else {
        result = `You lose!`
    }

    const roundResult = document.createElement('p')
    roundResult.classList.add('round-result')
    roundResult.textContent = `${round} ${result}`
    resultsEl.appendChild(roundResult)

    round++
} // Keeps track of the rounds and lets the user know who wins

// function clearRound() {
//     let clear = resultsEl
//     while (clear.firstChild) {
//         clear.removeChild(clear.lastChild);
//     }
// }
