const board = document.getElementById('chessboard');

function createBoard(){
    board.innerHTML = '';

    const letters = [' ', 'A', 'B', 'C','D','E','F','G','H',' '];
    for(let row = 0; row <= 9; row++){
        for (let col = 0; col <= 9; col++){
            const cell = document.createElement('div')
            cell.classList.add('cell');

            // bottom left corner
            if (row === 9 && col === 0){
                cell.classList.add('label');
            }
            // upper row and right most column
            else if (row === 0 || col === 9){
                cell.classList.add('label');
            }
            //letters
            else if (row === 9){
                cell.classList.add('label');
                cell.textContent = letters[col];
            }
            // numbers
            else if (col === 0){
                cell.classList.add('label');
                const index = 9 - row;
                cell.textContent = index.toString();
            }
            // checker board
            else{
                const isWhite = (row + col) % 2 === 0;
                if (isWhite)
                    cell.classList.add('white')
                else
                    cell.classList.add('black')

                cell.dataset.col = letters[col];
                const index = 9 - row;
                cell.dataset.row = index.toString();
            }
            board.appendChild(cell);
        }
    }
}

function resetPiece(){

}

function loadGame(){
    createBoard();
    document.addEventListener('DOMContentLoaded', function (){
        const param = new URLSearchParams(window.location.search);
        const mode = param.get('mode');

        if (mode === 'game')
            resetPiece();
    });
}