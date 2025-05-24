let board = document.querySelector('.board');
const messageText = document.getElementById('messageText');
let playerTurn = true;

function calculateWinner() {
    let winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningMoves.length; i++) {
        const [a, b, c] = winningMoves[i];
        if (board.children[a].textContent && board.children[a].textContent == board.children[b].textContent && board.children[b].textContent == board.children[c].textContent) {
            return true;
        }
    }

    return false;
}

function handleClick(i) {
    if (board.children[i].textContent || calculateWinner()) return;

    if (playerTurn) {
        board.children[i].textContent = 'X';
    } else {
        board.children[i].textContent = 'O';
    }

    let result = calculateWinner();
    if (playerTurn && result) {
        messageText.textContent = 'Player X Wins!';
    } else if (!playerTurn && result) {
        messageText.textContent = 'Player O Wins!';
    }

    playerTurn = !playerTurn;
}

for (let i = 0; i < board.children.length; i++) {
    if (i == 0 || i == 1 || i == 2) {
        board.children[i].style.borderTop = 'none';
    }

    if (i == 0 || i == 3 || i == 6) {
        board.children[i].style.borderLeft = 'none';
    }

    if (i == 6 || i == 7 || i == 8) {
        board.children[i].style.borderBottom = 'none';
    }

    if (i == 8 || i == 2 || i == 5) {
        board.children[i].style.borderRight = 'none';
    }
}

for (let i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener('click', () => handleClick(i));
}

function reset() {
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].textContent = '';
    }
    messageText.textContent = '';
}