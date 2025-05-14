import {chessboard, isValidSquare} from "./chessboard";

const Mode = {
    game: 'game',
    free: 'free'
}
export class game{

    constructor(mode) {
        // mode is a Mode constant
        this.chessboard = new chessboard();
        this.mode = mode;
        if (this.mode === Mode.game)
            this.chessboard.fillBoard();
    }

    isValidMove(letter, number, destLetter, destNumber){
        const piece = this.chessboard.get(letter, number);

        if (!isValidSquare(letter, number))
            return false;
        else if (!isValidSquare(destLetter, destNumber))
            return false;
        else if (piece === null)
            return false;
        else if (letter === destLetter && number === destNumber)
            return false;
        else if (!piece.canMove(destLetter, destNumber))
            return false;
        else if (this.chessboard.get(destLetter, destNumber) != null)
            return this.chessboard.get(destLetter, destNumber).color !== piece.color;
        //still need isVisible here, except knight
        return true;
    }
}