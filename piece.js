import {chessboard} from "./chessboard.js";

export const Color = {
    black: "black",
    white: "white"
}

class Piece{
    constructor(color, letter, number, chessboard) {
        this.color = color; //enum, either black or white
        this.letter = letter; //integer, 1 is A, 2 is B etc.
        this.num = number; //integer, the index will be number, for instance, a1 has letter = 1 and number = 1
        this.board = chessboard //chessboard, remove if unused
    }

    canMove(destLetter, destNumber){
        //piece.canMove only checks whether a piece can go there, use game.isValidMove to check backgrounds
        throw new Error("This function is used only for subclasses")
    }


    removePiece(){
        this.letter = -1;
        this.num = -1;
        this.board.squares[this.letter - 1][this.num - 1] = null;
        return this;
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
        return (this.letter === destLetter || this.num === destNumber);
    }
}

export class Bishop extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        return (Math.abs(this.letter - destLetter) === Math.abs(this.num  - destNumber));
    }
}

export class Knight extends Piece{
    constructor(color, letter, number, chessboard) {
        super(color, letter, number, chessboard);
    }

    canMove(destLetter, destNumber) {
        const letterDifference = Math.abs(destLetter - this.letter);
        const numberDifference = Math.abs(destNumber - this.num);

        if (letterDifference === 2 && numberDifference === 1)
            return true;
        else return letterDifference === 1 && numberDifference === 2;
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
        this.board.set(this.letter, this.num, target);
        this.removePiece();
    }
}