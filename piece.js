import {chessboard} from "./chessboard";

class Piece{
    constructor(color, letter, number, chessboard) {
        this.color = color; //string, either black or white
        this.letter = letter; //integer, 1 is A, 2 is B etc.
        this.number = number; //integer
        this.board = chessboard //chessboard, remove if unused
    }

    canMove(destLetter, destNumber){
        throw new Error("This function is used only for subclasses")
    }

    moveTo(destLetter, destNumber){
        if (this.canMove(destLetter,destNumber)) {
            this.letter = destLetter;
            this.number = destNumber;
            return true;
        }
        return false;
    }

    pieceOut(){
        this.letter = -1;
        this.number = -1;
    }
}

export class King extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }
}

export class Queen extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }
}

export class Rook extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }
}

export class Bishop extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }
}

export class Knight extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }
}

export class Pawn extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        super.canMove(destLetter, destNumber);
    }

    promotion(target){

    }
}