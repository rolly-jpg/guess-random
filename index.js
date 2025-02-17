console.log("hello")

let humanScore = 0
let computerScore = 0

playGame(5)

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
    console.log(choice)
    return choice
}

function getHumanChoice() {
    let choice = ''
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('your guess?','').toLowerCase()
    }
    console.log(choice)
    return choice
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice,computerChoice)
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        console.log('human wins')
    }
    else if (humanChoice === computerChoice) {
        console.log('tie')
    }
    else {
        computerScore++
        console.log('computer wins')
    }
}

function playGame(rounds) {
    let humanChoice, computerChoice
    for (let i = 0; i < rounds; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    let winner = humanScore>computerScore ? 'human' : (computerScore>humanScore?'computer':'tied')
    console.log(`human score: ${humanScore}, computer score: ${computerScore}, the winner is ${winner}`)
}