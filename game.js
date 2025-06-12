import {chessboard, isValidSquare} from "./chessboard";
import {Color, Knight} from "./piece";
import {toGridDataset} from "./gameApp"

export class game{

    constructor() {
        this.chessboard = new chessboard();
        this.turn = Color.white;
        this.chessboard.fillBoard();
        this.checkmake = false;
        this.tie = false;
        this.lastSixRounds = [];
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

        for (let i = 0; i < opponents.length; i++) {
            if (opponents[i].canMove(king.letter, king.num))
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

    hasAvailableMove(){
        //check whether there are available moves for the current turn
        const pieces = this.chessboard.getPieces(this.turn);

        for (const piece of pieces) {
            for (let col = 1; col <= 8; col++) {
                for (let row = 1; row <= 8; row++) {
                    if (this.isValidMove(piece.letter, piece.num, col, row)) {
                        return true;
                }
            }
        }
    }

    return false;
    }

    isCheckmate(){
        //checkmate achieved for current turn
        if(this.isInCheck(this.turn) && !this.hasAvailableMove()){
            this.checkmake = true;
            return true;
        }
        return false;
    }

    isTie(){
        //achieves a tie, either repeated moves 3 times or no possible moves without in check
        //a tie due to repeating moves
        if (this.lastSixRounds.length === 12) {
            if (
                this.lastSixRounds[0] === this.lastSixRounds[4] &&
                this.lastSixRounds[4] === this.lastSixRounds[8] &&
                this.lastSixRounds[1] === this.lastSixRounds[5] &&
                this.lastSixRounds[5] === this.lastSixRounds[9] &&
                this.lastSixRounds[2] === this.lastSixRounds[6] &&
                this.lastSixRounds[6] === this.lastSixRounds[10] &&
                this.lastSixRounds[3] === this.lastSixRounds[7] &&
                this.lastSixRounds[7] === this.lastSixRounds[11]
            ) {
                this.tie = true;
                return true;
            }
        }

        //a stalemate
        if (!this.isInCheck(this.turn) && !this.hasAvailableMove()) {
            this.tie = true;
            return true;
        }

        return false;
    }

    tryMove(letter, number, destLetter, destNumber){
        //Return true if move is successful, false if not, does not apply a real move

        //IMPORTANT: make sure the move is valid beforehand
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

        //also undo move even if move is successful
        this.chessboard.set(letter, number, piece);
        this.chessboard.set(destLetter, destNumber, capture);
        return true;
    }

    applyMove(letter, number, destLetter, destNumber){
        if (!this.tryMove(letter, number, destLetter, destNumber)) {
            //do nothing
        }
        else{
            const piece = this.chessboard.get(letter, number);
            const firstHalf = toGridDataset(letter, number).concat('-');
            this.lastSixRounds.push(firstHalf.concat(toGridDataset(destLetter, destNumber)));
            if (this.lastSixRounds.length === 13)
                this.lastSixRounds.shift();

            //To see whether an opponent piece is captured
            let capture = null;
            if (this.chessboard.isOccupied(destLetter, destNumber))
            capture = this.chessboard.get(destLetter, destNumber).removePiece();

            this.chessboard.set(destLetter, destNumber, piece);
            this.chessboard.set(letter, number, null);

            this.turn = (this.turn === Color.white) ? Color.black : Color.white;
        }
    }

}