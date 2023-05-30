
import {Piece, PieceType, Position, samePosition, TeamType} from "../const";
import {getPawnMoves, pawnMove} from "./PawnRule";
import {knightMove} from "./KnightRule";
import {bishopMove} from "./BishopRule";
import {rookMove} from "./RookRule";
import {queenMove} from "./QueenRule";
import {kingMove} from "./KingRule";
import {tileOccupied} from "./GeneralRule";

export default class Rule {

    isValidMove(
                initialPosition: {x: number, y: number},
                finalPosition: {x: number, y: number},
                type: PieceType,
                team: TeamType,
                boardState: Piece[]
    ) {
        let validMove = false;
        if (type === PieceType.PAWN) {
            validMove = pawnMove(initialPosition, finalPosition, team, boardState);
        } else if (type === PieceType.BISHOP) {// @ts-ignore
            validMove = bishopMove(initialPosition, finalPosition, team, boardState);
        } else if (type === PieceType.KNIGHT) {// @ts-ignore
            validMove = knightMove(initialPosition, finalPosition, team, boardState);
        } else if (type === PieceType.ROOK) {// @ts-ignore
            validMove = rookMove(initialPosition, finalPosition, team, boardState);
        } else if (type === PieceType.QUEEN) {
            // @ts-ignore
            validMove = queenMove(initialPosition, finalPosition, team, boardState);
        } else if (type === PieceType.KING) {
            // @ts-ignore
            validMove = kingMove(initialPosition, finalPosition, team, boardState);
        }
        return validMove;
    }

    getValidMoves(piece: Piece,boardState: Piece[] ): Position[] {

        if (piece.type === PieceType.PAWN) {
            return getPawnMoves(piece,boardState);
        }
        return [];
    }

}