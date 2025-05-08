import {King, Queen, Rook, Bishop, Knight, Pawn} from "./piece.js";

export class chessboard{

    constructor() {
        this.checks = null;
    }

    setGame(){

    }

    isOccupied(letter, number){
        return false;
    }

    getPiece(letter, number){
        if (!this.isOccupied(letter, number))
            throw new Error("No piece at all");
    }
}