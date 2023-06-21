const rockEl = document.querySelector('#rock')
const paperEl = document.querySelector('#paper')
const scissorsEl = document.querySelector('#scissors')
let resultsEl = document.querySelector('#results')

let userScore = document.querySelector('#user-score')
let computerScore = document.querySelector('#computer-score')
let tieScore = document.querySelector('#tie-score')
let rounds = document.querySelector('#round-score')

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
        resultsEl.removeChild(resultsEl.lastChild);
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 3 )

    const choices = ['🪨', '📄', '✂️']
    const computerChoice = choices[randomNumber]

    return computerChoice
}

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

let round = 0
const maxScore = 10
function roundScore() {
    round++
    rounds.textContent = round

        if (round == maxScore) {
            win = 0
            lose = 0
            tie = 0
            round = 0
        } 
}