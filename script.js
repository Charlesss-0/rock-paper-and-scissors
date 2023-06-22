const rockEl = document.querySelector('#rock')
const paperEl = document.querySelector('#paper')
const scissorsEl = document.querySelector('#scissors')
let resultsEl = document.querySelector('#results')

rockEl.addEventListener('click', () => {
    playGame('🪨')
})

paperEl.addEventListener('click', () => {
    playGame('📄')
})

scissorsEl.addEventListener('click', () => {
    playGame('✂️')
})

function clearRound() {
    while (resultsEl.firstChild) {
        resultsEl.removeChild(resultsEl.lastChild)
    }
} // clears the result every time the user selects a different options so that the options don't get stacked on top of each other

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 15 ) + 1

    if (randomNumber <= 5) {
        return '🪨'
    } else if (randomNumber <= 10) {
        return '📄'
    } else {
        return '✂️'
    }

    // const choices = ['🪨', '📄', '✂️']
    // const computerChoice = choices[randomNumber]

    // return computerChoice
}

let userScore = document.querySelector('#user-score')
let computerScore = document.querySelector('#computer-score')
let tieScore = document.querySelector('#tie-score')

let win = 0
let lose = 0
let tie = 0
function playGame(userChoice) {
    clearRound()

    const computerChoice = getComputerChoice()
    let result

    const selection = document.createElement('p')
    selection.classList.add('user-select')
    selection.textContent = `${userChoice} vs ${computerChoice}`
    resultsEl.appendChild(selection)

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

    const roundResult = document.createElement('p')
    roundResult.classList.add('round-result')
    roundResult.textContent = `${result}`
    resultsEl.appendChild(roundResult)

    roundScore()    

} // Creates a new element using the user and computer selection and appends it to resultsEl, determines who wins the round and stores the result at the top

function playAgain() {
    const buttonEl = `
        <button id="playAgain-btn" class="play-again">
            Play Again
        </button>
    `
    resultsEl.innerHTML = buttonEl

    const playAgainBtn = document.querySelector('#playAgain-btn')
    playAgainBtn.addEventListener('click', () => {
    round = 0
    win = 0
    lose = 0
    tie = 0

    resultsEl.textContent = ''
    rounds.textContent = round
    userScore.textContent = win
    computerScore.textContent = lose
    tieScore.textContent = tie
})

} // Sets everything back to the beginning so that the user can start playing again

let rounds = document.querySelector('#round-score')

let round = 0
function roundScore() {
    const maxRound = 10

    if (round < 11) {
        round++
        rounds.textContent = round

        if (round === 11) {
            round = 10
            win = 10
            lose = 10
            tie = 10

            rounds.textContent = round
            userScore.textContent = win
            computerScore.textContent = lose
            tieScore.textContent = tie
        }
    }

    if (round === maxRound) {
        if (win > lose) {
            resultsEl.innerHTML = `
                <h2>
                    You win by ${win} against ${lose}!
                </h2>
            `

        } else if (lose > win) {
            resultsEl.innerHTML = `
                <h2>
                    Computer wins by ${lose} against ${win}!
                </h2>
            `

        } else {
            resultsEl.innerHTML = `
                <h2>
                    Great game, it's a draw!
                </h2>
            `
            if (round === 10) {
                playAgain()
            }
        }
    }
} // Sets the number of rounds being played and stops when reached the limit so that the user can restart the game

