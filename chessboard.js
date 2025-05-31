import {Bishop, Color, King, Knight, Queen, Rook} from "./piece.js";

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

        this.squares[2][0] = new Bishop(Color.white, 3, 1, this) //C1
        this.squares[5][0] = new Bishop(Color.white, 6, 1, this) //F1
        this.squares[2][7] = new Bishop(Color.black, 3, 8, this) //C8
        this.squares[5][7] = new Bishop(Color.black, 6, 8, this) //F8

        this.squares[1][0] = new Knight(Color.white, 2, 1, this) //B1
        this.squares[6][0] = new Knight(Color.white, 7, 1, this) //G1
        this.squares[1][7] = new Knight(Color.black, 2, 8, this) //B8
        this.squares[6][7] = new Knight(Color.black, 7, 8, this) //G8
    }

    isOccupied(letter, number){
        return this.squares[letter - 1][number - 1] != null;
    }

    get(letter, number){
    return this.squares[letter - 1][number - 1];
    }

    set(letter, number, piece){
    //piece has type Piece
    this.squares[letter][number] = piece;
    }
}

export function isValidSquare(letter, number){
    if (letter <= 0 || letter > 8)
        return false;
    else return !(number <= 0 || number > 8);
}



