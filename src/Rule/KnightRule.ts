import {Piece, Position, TeamType} from "../const";
import {tileOccupied, tileOccupiedByOpponent} from "./GeneralRule";

export const knightMove = (initialPosition: Position, finalPosition: Position,team: TeamType , boardState: Piece[]) =>{
    if (Math.abs(initialPosition.x - finalPosition.x) === 2 && Math.abs(initialPosition.y - finalPosition.y) === 1){
        if (!tileOccupied(finalPosition, boardState)){
            return true;
        }
        if (tileOccupiedByOpponent(finalPosition, boardState, team)){
            return true;
        }
    }
    else if (Math.abs(initialPosition.x - finalPosition.x) === 1 && Math.abs(initialPosition.y - finalPosition.y) === 2){
        if (!tileOccupied(finalPosition, boardState)){
            return true;
        }
        if (tileOccupiedByOpponent(finalPosition, boardState, team)){
            return true;
        }
    }
}