import {Chessboard} from "./chessboard.js";

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
        //Piece.canMove only checks whether a piece can go there, use game.isValidMove to check backgrounds
        throw new Error("This function is used only for subclasses")
    }


    removePiece(){
        this.board.squares[this.letter - 1][this.num - 1] = null;
        this.letter = -1;
        this.num = -1;
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
        const target = this.board.get(destLetter, destNumber);

        if(this.color === Color.white){
            if (destLetter === this.letter && target === null){
                if (destNumber - this.num === 1)
                    return true;
                else if (destNumber - this.num === 2 && this.num === 2)
                    return true;
            }
            else if (target !== null && target.color === Color.black){
                if (Math.abs(destLetter - this.letter) === 1 && destNumber - this.num === 1)
                    return true;
            }
        }

        if (this.color === Color.black){
            if (destLetter === this.letter && target === null){
                if (this.num - destNumber === 1)
                    return true;
                else if (this.num - destNumber === 2 && this.num === 7)
                    return true;
            }
            else if(target !== null && target.color === Color.white){
                if (Math.abs(destLetter - this.letter) === 1 && this.num - destNumber === 1)
                    return true;
            }
        }
        return false;
    }

    promotion(target){
        //target is a piece
        const letter = this.letter
        const number = this.num;
        this.removePiece();
        this.board.set(letter, number, target);
    }
}