function getComputerChoice() {
    const computerChoice = Math.floor( Math.random() * 15 ) + 1

    if (computerChoice <= 5) {
        return 'Rock'
    } else if (computerChoice <= 10) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function game() {
    let playerSelection = prompt('Choose wisely! Rock Paper Scissors')
    let computerChoice = getComputerChoice()

    if (playerSelection.toUpperCase() === 'rock' || playerSelection.toLowerCase() === 'rock') {
        return `Player chose ${playerSelection} and computer chose ${computerChoice}`

    } else if (playerSelection.toUpperCase() === 'paper' || playerSelection.toLowerCase() === 'paper') {
        return `Player chose ${playerSelection} and computer chose ${computerChoice}`

    } else if (playerSelection.toUpperCase() === 'scissors' || playerSelection.toLowerCase() === 'scissors') {
        return `Player chose ${playerSelection} and computer chose ${computerChoice}`

    } else {
        return 'That is not a valid selection, please try again!'

    }
}

function gameLoop() {
    for (let i = 1; i <= 10; i++) {
        console.log( game() )
    }
}

gameLoop()