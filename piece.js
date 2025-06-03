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
        //piece.canMove only checks whether a piece can go there, use game.isValidMove to check backgrounds
        throw new Error("This function is used only for subclasses")
    }


    removePiece(){
        this.letter = -1;
        this.number = -1;
    }
}

export class King extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        return (Math.abs(this.letter - destLetter) <= 1 && Math.abs(this.number - destNumber) <= 1)
    }
}

export class Queen extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        if (Math.abs(this.letter - destLetter) === Math.abs(this.number  - destNumber))
            return true;
        else
            return (this.letter === destLetter || this.number === destNumber);
    }
}

export class Rook extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        return (this.letter === destLetter || this.number === destNumber);
    }
}

export class Bishop extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        return (Math.abs(this.letter - destLetter) === Math.abs(this.number  - destNumber));
    }
}

export class Knight extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        const letterDifference = Math.abs(destLetter - this.letter);
        const numberDifference = Math.abs(destNumber - this.number);
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
        //target is a piece
        this.board.set(this.letter, this.number, target);
        this.removePiece();
    }
}