let board = document.querySelector('.board');

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