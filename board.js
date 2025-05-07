const board = document.getElementById('chessboard');

function createBoard(){
    board.innerHTML = '';

    const letters = [' ', 'A', 'B', 'C','D','E','F','G','H',' '];
    for(let row = 0; row <= 9; row++){
        for (let col = 0; col <= 9; col++){
            const cell = document.createElement('div')
            cell.classList.add('cell');
            board.appendChild(cell);
        }
    }
}

createBoard()