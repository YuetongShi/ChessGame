const board = document.getElementById('chessboard');
const letters = [' ', 'A', 'B', 'C','D','E','F','G','H',' '];

function createBoard(){
    board.innerHTML = '';

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

function toGridDataset(letter, number){
    //parameters are backend numeric values, returned values are datasets of cell
    return [letters[letter], number.toString()];
}

function resetPiece(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        if ((cell.dataset.col === 'A' || cell.dataset.col === 'H') && cell.dataset.row === '1' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_rook.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'A' || cell.dataset.col === 'H') && cell.dataset.row === '8' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_rook.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'B' || cell.dataset.col === 'G') && cell.dataset.row === '1' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_knight.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'B' || cell.dataset.col === 'G') && cell.dataset.row === '8' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_knight.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'C' || cell.dataset.col === 'F') && cell.dataset.row === '1' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_bishop.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'C' || cell.dataset.col === 'F') && cell.dataset.row === '8' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_bishop.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if (cell.dataset.row === '2' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_pawn.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if (cell.dataset.row === '7' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_pawn.png';
            img.style.width = '75%';
            img.style.height = '75%';
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'D') && cell.dataset.row === '1' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_queen.png';
            img.style.width = '75%';
            img.style.height = '75%';
            img.draggable = true;
            img.id = 'queenD1'
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'D') && cell.dataset.row === '8' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_queen.png';
            img.style.width = '75%';
            img.style.height = '75%';
            img.draggable = true;
            img.id = 'queenD8'
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'E') && cell.dataset.row === '1' ) {
            const img = document.createElement('img');
            img.src = 'imgs/w_king.png';
            img.style.width = '75%';
            img.style.height = '75%';
            img.draggable = true;
            img.id = 'kingE1'
            cell.appendChild(img);
        }

        else if ((cell.dataset.col === 'E') && cell.dataset.row === '8' ) {
            const img = document.createElement('img');
            img.src = 'imgs/b_king.png';
            img.style.width = '75%';
            img.style.height = '75%';
            img.draggable = true;
            img.id = 'kingE8'
            cell.appendChild(img);
        }
    });
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

loadGame();