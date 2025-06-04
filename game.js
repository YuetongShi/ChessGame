import {chessboard, isValidSquare} from "./chessboard";
import {Color, Knight} from "./piece";

export class game{

    constructor() {
        this.chessboard = new chessboard();
        this.turn = Color.white;
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
        else if(!this.isVisible(letter, number , destLetter, destNumber, piece))
            return false;
        else if (this.chessboard.get(destLetter, destNumber) != null)
            return this.chessboard.get(destLetter, destNumber).color !== piece.color;
        return true;
    }

    isInCheck(color){
        const king = this.chessboard.getKing(color);
        const opponentColor = (color === Color.white) ? Color.black : Color.white;
        //The color of the opponent side
        const opponents = this.chessboard.getPieces(opponentColor);

        for(let item in opponents){
            if (item.canMove(king.letter, king.num))
                return true;
        }
        return false;
    }

    isVisible(letter, number, destLetter, destNumber, piece){
        // make sure that there are no obstacles between two squares
        if (piece instanceof Knight)
            return true;

        const letterDifference = Math.abs(letter - destLetter);
        const numberDifference = Math.abs(number - destNumber);

        if (letterDifference <= 1 && numberDifference <= 1)
            return true;

        let stepLetter = 0;
        if (destLetter > letter) {
            stepLetter = 1;
        } else if (destLetter < letter) {
            stepLetter = -1;
        }

        let stepNumber = 0;
        if (destNumber > number) {
            stepNumber = 1;
        } else if (destNumber < number) {
            stepNumber = -1;
        }

        let currentLetter = letter + stepLetter;
        let currentNumber = number + stepNumber;

        while (currentLetter !== destLetter || currentNumber !== destNumber) {
            if (this.chessboard.get(currentLetter, currentNumber) !== null) {
                return false;
            }
            currentLetter += stepLetter;
            currentNumber += stepNumber;
        }

        return true;
    }

    isCheckmate(){
        //checkmate achieved for any
    }

    moveTo(letter, number, destLetter, destNumber){
        //Return true if move is successful, false if not

        //IMPORTANT: make sure the move is valid beforehand!
        if (!this.isValidMove(letter, number, destLetter, destNumber))
            return false;

        const piece = this.chessboard.get(letter, number);

        //To see whether an opponent piece is captured
        let capture = null;
        if (this.chessboard.isOccupied(destLetter, destNumber))
            capture = this.chessboard.get(destLetter, destNumber).removePiece();

        this.chessboard.set(destLetter, destNumber, piece);
        this.chessboard.set(letter, number, null);

        if (this.isInCheck(this.turn)){
            //move is unsuccessful, undo move
            this.chessboard.set(letter, number, piece);
            this.chessboard.set(destLetter, destNumber, capture);
            return false;
        }

        //run this part only if move is successful
        this.turn = (this.turn === Color.white) ? Color.black : Color.white;
        return true;
    }

}