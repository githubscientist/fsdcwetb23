// chooses a random number index
// use that to select randomly one of the choices rock, paper, scissor
function generateComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];

    let randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'Tie';
    else if ((playerChoice == 'Rock' && computerChoice == 'Scissor') || (playerChoice == 'Scissor' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
}

function play(playerChoice) {
    let pChoice = document.getElementById('pChoice');
    pChoice.textContent = playerChoice;

    let computerChoice = generateComputerChoice();

    let cChoice = document.getElementById('cChoice');
    cChoice.textContent = computerChoice;

    let winner = getWinner(playerChoice, computerChoice);
    let result = document.getElementById('result');
    result.textContent = winner;
}