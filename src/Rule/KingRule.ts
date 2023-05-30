import {Piece, Position, TeamType} from "../const";
import {tileOccupied, tileOccupiedByOpponent} from "./GeneralRule";

export const kingMove = (initialPosition: Position, finalPosition: Position, team: TeamType , boardState: Piece[]) =>{
    if (Math.abs(initialPosition.x - finalPosition.x) <= 1 && Math.abs(initialPosition.y - finalPosition.y) <= 1){
        if (!tileOccupied(finalPosition, boardState)){
            return true;
        }
        if (tileOccupiedByOpponent(finalPosition, boardState, team)){
            return true;
        }
    }
}