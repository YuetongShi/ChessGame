class Piece{
    constructor(color, letter, number) {
        this.color = color; //string, either black or white
        this.letter = letter; //integer, 1 is A, 2 is B etc.
        this.number = number; //integer
    }
}

export class King extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}

export class Queen extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}

export class Rook extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}

export class Bishop extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}

export class Knight extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}

export class Pawn extends Piece{
    constructor(color, letter, number) {
        super(color, letter, number);
    }
}