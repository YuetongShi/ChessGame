import {Color, Queen, Rook} from "./piece.js";

export class chessboard{

    constructor() {
        this.squares = [[],[],[],[],[],[],[],[]]; //element with type Piece
        for (let item in this.squares){
            for (let i = 0; i < 8; i++){
                item.push(null);
            }
        }
    }

    fillBoard(){
        //the function resets all the pieces in a board for game mode
        this.squares[0][0] = new Rook(Color.white, 1, 1, this); //A1
        this.squares[0][7] = new Rook(Color.white, 8, 1, this); //H1
        this.squares[7][0] = new Rook(Color.black, 1, 8, this); //A8
        this.squares[7][7] = new Rook(Color.black, 8, 8, this); //H8

        this.squares[3][0] = new Queen(Color.white, 4, 1, this); //D1
        this.squares[3][7] = new Queen(Color.black, 4, 8, this); //D8

        this.squares[4][0] = new King(Color.white, 5, 1, this) //E1
        this.squares[4][7] = new King(Color.black, 5, 8, this) //E8
    }

    isValidSquare(letter, number){
    }

    isOccupied(letter, number){
        return this.squares[letter - 1][number - 1] != null;
    }

    getPiece(letter, number){
        if (!this.isOccupied(letter, number))
            throw new Error("No piece at all");
        else
            return this.squares[letter - 1][number - 1];
    }
}

export function isValidSquare(letter, number){
    if (letter <= 0 || letter > 8)
        return false;
    else return !(number <= 0 || letter > 8);
}