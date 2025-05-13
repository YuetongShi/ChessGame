import {chessboard} from "./chessboard";

export const Color = {
    black: "black",
    white: "white"
}

class Piece{
    constructor(color, letter, number, chessboard) {
        this.color = color; //enum, either black or white
        this.letter = letter; //integer, 0 is A, 1 is B etc.
        this.number = number; //integer, the index will be number + 1, for instance, a1 has letter = 0 and number = 0
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