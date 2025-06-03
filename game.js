import {chessboard, isValidSquare} from "./chessboard";
import {Color, Knight} from "./piece";

export class game{

    constructor() {
        // mode is a Mode constant
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
        //still need isInCheck here, make sure that the king of the same color is not in check
        return true;
    }

    isInCheck(color){

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

    moveTo(letter, number, destLetter, destNumber){

    }
}