let humanScore = 0
let computerScore = 0

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener('click', () => { playRound("rock", getComputerChoice()) })
paperButton.addEventListener('click', () => { playRound("paper", getComputerChoice()) })
scissorsButton.addEventListener('click', () => { playRound("scissors", getComputerChoice()) })

const resultDiv = document.createElement("div")
document.body.appendChild(resultDiv)

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    let choice = ''
    switch (random) {
        case 0:
            choice = 'rock'
            break
        case 1:
            choice = 'paper'
            break
        case 2:
            choice = 'scissors'
            break
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        resultDiv.textContent = `computer chose ${computerChoice}, human wins. Current score is ${humanScore}:${computerScore}`
    }
    else if (humanChoice === computerChoice) {
        resultDiv.textContent = `computer chose ${computerChoice}, it's a tie. Current score is ${humanScore}:${computerScore}`
    }
    else {
        computerScore++
        resultDiv.textContent = `computer chose ${computerChoice}, computer wins. Current score is ${humanScore}:${computerScore}`
    }

    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore>computerScore ? 'human' : (computerScore>humanScore?'computer':'tied')
        resultDiv.textContent = `human score: ${humanScore}, computer score: ${computerScore}, the winner is ${winner}`
    }
}