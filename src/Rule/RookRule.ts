import {Piece, Position, TeamType} from "../const";
import {tileOccupied, tileOccupiedByOpponent} from "./GeneralRule";

export const rookMove = (initialPosition: Position, finalPosition: Position, team: TeamType , boardState: Piece[]) =>{
    if (initialPosition.y === finalPosition.y){ //ngang
        for (let i = 1; i < 8 ; i++){
            let key = ((finalPosition.x < initialPosition.x) ? -1 : 1);
            let passedMove : Position = {x: initialPosition.x + (i*key) , y: initialPosition.y };
            if ( passedMove.x === finalPosition.x && passedMove.y === finalPosition.y){
                if (tileOccupiedByOpponent(finalPosition, boardState, team) || !tileOccupied(finalPosition, boardState))
                    return true;
            }
            else {
                if (tileOccupied(passedMove, boardState)) {
                    break;
                }
            }
        }
    }
    // Doc
    if (initialPosition.x === finalPosition.x){
        for (let i = 1; i < 8 ; i++){
            let key = ((finalPosition.y < initialPosition.y) ? -1 : 1);
            let passedMove : Position = {x: initialPosition.x , y: initialPosition.y + (key*i) };
            if (passedMove.y === finalPosition.y && passedMove.x === finalPosition.x){
                if (tileOccupiedByOpponent(passedMove, boardState, team) || !tileOccupied(finalPosition, boardState))
                    return true;

            }
            else {
                if (tileOccupied(passedMove, boardState)) {
                    break;
                }
            }
        }
    }

}