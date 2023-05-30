import {Piece, Position, TeamType} from "../const";
import {bishopMove} from "./BishopRule";
import {rookMove} from "./RookRule";

export const queenMove = (initialPosition: Position, finalPosition: Position, team: TeamType , boardState: Piece[]) => {
    if (bishopMove(initialPosition, finalPosition, team, boardState) || rookMove(initialPosition, finalPosition, team, boardState)){
        return true;
    }
}