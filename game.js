import {chessboard, isValidSquare} from "./chessboard";
import {Color} from "./piece";

const Mode = {
    game: 'game',
    free: 'free'
}
export class game{

    constructor(mode) {
        // mode is a Mode constant
        this.chessboard = new chessboard();
        this.mode = mode;
        this.turn = Color.white;
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
        else if(piece.color !== this.turn)
            return false;
        else if (letter === destLetter && number === destNumber)
            return false;
        else if (!piece.canMove(destLetter, destNumber))
            return false;
        else if (this.chessboard.get(destLetter, destNumber) != null)
            return this.chessboard.get(destLetter, destNumber).color !== piece.color;
        //still need isVisible here, except knight
        //still need isInCheck here, make sure that the king of the same color is not in check
        return true;
    }

    isInCheck(color){

    }

    isVisible(letter, number, destLetter, destNumber){

    }

    moveTo(letter, number, destLetter, destNumber){

    }
}