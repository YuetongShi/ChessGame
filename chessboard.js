import {King, Queen, Rook, Bishop, Knight, Pawn} from "./piece.js";

export class chessboard{

    constructor() {
        this.checks = null;
    }

    setGame(){

    }

    isValidSquare(letter, number){
    }

    isOccupied(letter, number){
        return false;
    }

    getPiece(letter, number){
        if (!this.isOccupied(letter, number))
            throw new Error("No piece at all");
    }
}

function isValidSquare(letter, number){
    if (letter <= 0 || letter > 8)
        return false;
    else if (number <= 0 || letter > 8)
        return false;
    else
        return true;
}