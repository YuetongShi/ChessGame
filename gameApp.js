import {Game} from "./game.js";
import {King} from "./piece.js";
import {Chessboard} from "./chessboard.js";


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
            // checker gameApp
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

export function toGridDataset(letter, number){
    //parameters are backend numeric values, returned values are datasets of cell
    //(1, 1) turns to 'A1'
    return letters[letter].concat(number.toString());
}

function addPiece(pieceName, colorCap, col, row) {
    //the function adds a piece at the input grid axis according to dataset, color is a single letter here
    const selector = `.cell[data-col='${col}'][data-row='${row}']`;
    const cell = document.querySelector(selector);

    if (cell) {
        const img = document.createElement('img');
        img.src = `imgs/${colorCap}_${pieceName}.png`;
        img.style.width = '75%';
        img.style.height = '75%';
        img.draggable = true;
        img.id = `${colorCap}_${pieceName}_${col}${row}`;
        cell.appendChild(img);
    }
}

function resetPiece(){
    const pieces = [
        ['rook', 'w', 'A', '1'], ['rook', 'w', 'H', '1'],
        ['rook', 'b', 'A', '8'], ['rook', 'b', 'H', '8'],

        ['knight', 'w', 'B', '1'], ['knight', 'w', 'G', '1'],
        ['knight', 'b', 'B', '8'], ['knight', 'b', 'G', '8'],

        ['bishop', 'w', 'C', '1'], ['bishop', 'w', 'F', '1'],
        ['bishop', 'b', 'C', '8'], ['bishop', 'b', 'F', '8'],

        ['queen', 'w', 'D', '1'], ['queen', 'b', 'D', '8'],
        ['king',  'w', 'E', '1'], ['king',  'b', 'E', '8']
    ];

    // Add non-pawn
    for (const [type, color, col, row] of pieces) {
        addPiece(type, color, col, row);
    }

    // Add pawn
    const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (const col of cols) {
        addPiece('pawn', 'w', col, '2');
        addPiece('pawn', 'b', col, '7');
    }

    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.dataTransfer.setData('text/plain', e.target.id);
        }
    });


    document.addEventListener('dragover', function (e) {
        if (e.target.classList.contains('cell') && !e.target.classList.contains('label')) {
            e.preventDefault();
        }
    });


    document.addEventListener('drop', function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const img = document.getElementById(id);
        if (e.target.classList.contains('cell') && !e.target.classList.contains('label')) {
            if (img && e.target !== img.parentNode) {
                e.target.innerHTML = '';
                e.target.appendChild(img);
            }
        }
    });
}

function loadGame(){
    createBoard();
    resetPiece();
    const newGame = new Game();

   /* while (!game.checkmate && !game.tie){
      // detect drag and make movement here until a result comes out
    }
    */
}

loadGame();