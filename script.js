function getComputerChoice() {
    let randomValue = Math.floor( Math.random() * 3 ) + 1

    if (randomValue === 1) {
        return 'Rock'
    } else if (randomValue === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let playerRound = playerSelection + computerSelection
    if (playerSelection === rock) {
        console.log(`Player chose ${rock}, Computer chose ${computerSelection}`)
    } else if (playerSelection === paper) {
        console.log(`Player chose ${paper}, Computer chose ${computerSelection}`)
    } else {
        console.log(`Player chose ${scissor}, Computer chose ${computerSelection}`)
    }
    return playerRound
}

const playerChoice = prompt('Choose wisely! Rock Paper Scissors')
const computerChoice = getComputerChoice()
console.log(playRound(playerChoice, computerChoice))


function game(round) {
    for (let i = 1; i < round.length; i++) {

    }
}