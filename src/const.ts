export const HORIZONTA_LAXIS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const GRID_SIZE = 100;

export function samePosition(pos1: Position, pos2: Position) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export interface Position{
    x: number;
    y: number;

}
export interface Piece{
    image: string;
    position: Position;
    type: PieceType;
    team: TeamType;
    possibleMoves?: Position[];
}


export enum TeamType {
    OPPONENT = "b",
    PLAYER = "w"
}

export enum PieceType {
    PAWN = "P",
    ROOK = "R",
    KNIGHT = "N",
    BISHOP = "B",
    QUEEN = "Q",
    KING = "K"
}

export const initialBoardState : Piece[] = [
    {
        image: "wR.png",
        position: {x: 0, y: 0},
        type: PieceType.ROOK,
        team: TeamType.PLAYER
    },

    {
        image: "wN.png",
        position: {x: 1, y: 0},
        type: PieceType.KNIGHT,
        team: TeamType.PLAYER
    },
    {
        image: "wB.png",
        position: {x: 2, y: 0},
        type: PieceType.BISHOP,
        team: TeamType.PLAYER

    },
    {
        image: "wQ.png",
        position: {x: 3, y: 0},
        type: PieceType.QUEEN,
        team: TeamType.PLAYER
    },
    {
        image: "wK.png",
        position: {x: 4, y: 0},
        type: PieceType.KING,
        team: TeamType.PLAYER
    },
    {
        image: "wB.png",
        position: {x: 5, y: 0},
        type: PieceType.BISHOP,
        team: TeamType.PLAYER
    },
    {
        image: "wN.png",
        position: {x: 6, y: 0},
        type: PieceType.KNIGHT,
        team: TeamType.PLAYER
    },
    {
        image: "wR.png",
        position: {x: 7, y: 0},
        type: PieceType.ROOK,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 0, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 1, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 2, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 3, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 4, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 5, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 6, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "wP.png",
        position: {x: 7, y: 1},
        type: PieceType.PAWN,
        team: TeamType.PLAYER
    },
    {
        image: "bR.png",
        position: {x: 0, y: 7},
        type: PieceType.ROOK,
        team: TeamType.OPPONENT

    },
    {
        image: "bN.png",
        position: {x: 1, y: 7},
        type: PieceType.KNIGHT,
        team: TeamType.OPPONENT
    },
    {
        image: "bB.png",
        position: {x: 2, y: 7},
        type: PieceType.BISHOP,
        team: TeamType.OPPONENT
    },
    {
        image: "bQ.png",
        position: {x: 3, y: 7},
        type: PieceType.QUEEN,
        team: TeamType.OPPONENT
    },
    {
        image: "bK.png",
        position: {x: 4, y: 7},
        type: PieceType.KING,
        team: TeamType.OPPONENT
    },
    {
        image: "bB.png",
        position: {x: 5, y: 7},
        type: PieceType.BISHOP,
        team: TeamType.OPPONENT
    },
    {
        image: "bN.png",
        position: {x: 6, y: 7},
        type: PieceType.KNIGHT,
        team: TeamType.OPPONENT
    },
    {
        image: "bR.png",
        position: {x: 7, y: 7},
        type: PieceType.ROOK,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 0, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 1, y: 6},

        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 2, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 3, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 4, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 5, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 6, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    },
    {
        image: "bP.png",
        position: {x: 7, y: 6},
        type: PieceType.PAWN,
        team: TeamType.OPPONENT
    }
];
