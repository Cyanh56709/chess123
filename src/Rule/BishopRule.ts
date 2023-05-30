import {Piece, Position, TeamType} from "../const";
import {tileOccupied, tileOccupiedByOpponent} from "./GeneralRule";

export const bishopMove = (initialPosition: Position, finalPosition: Position, team: TeamType ,boardState: Piece[]) => {
    for (let i = 1 ; i < 8; i++){
        // Di cheo tren phai
        if (initialPosition.x < finalPosition.x && initialPosition.y < finalPosition.y){
            let passedMove : Position = {x: initialPosition.x + i , y: initialPosition.y + i };
            if (passedMove.x === finalPosition.x && passedMove.y === finalPosition.y){
                if (tileOccupiedByOpponent(finalPosition, boardState, team))
                    return true;
            }
            if (tileOccupied(passedMove, boardState)){
                break;
            }
        }
        if (finalPosition.x - initialPosition.x === i && finalPosition.y - initialPosition.y === i){
            return true;
        }
        // Di cheo duoi phai
        if (initialPosition.x < finalPosition.x && initialPosition.y > finalPosition.y){
            let passedMove : Position = {x: initialPosition.x + i , y: initialPosition.y - i };
            if (passedMove.x === finalPosition.x && passedMove.y === finalPosition.y){
                if (tileOccupiedByOpponent(finalPosition, boardState, team))
                    return true;
            }
            if (tileOccupied(passedMove, boardState)){
                break
            }
        }
        if (finalPosition.x - initialPosition.x === i && finalPosition.y -initialPosition.y === -i){
            return true;
        }
        // Di cheo tren trai
        if (initialPosition.x > finalPosition.x && initialPosition.y < finalPosition.y){
            let passedMove : Position = {x: initialPosition.x - i , y: initialPosition.y + i };
            if (passedMove.x === finalPosition.x && passedMove.y === finalPosition.y){
                if (tileOccupiedByOpponent(finalPosition, boardState, team))
                    return true;
            }
            if (tileOccupied(passedMove, boardState)){
                break;
            }
        }
        if (finalPosition.x - initialPosition.x === -i && finalPosition.y - initialPosition.y === i){
            return true;
        }

        // Di cheo duoi trai
        if (initialPosition.x > finalPosition.x && initialPosition.y > finalPosition.y){
            let passedMove : Position = {x: initialPosition.x - i , y: initialPosition.y - i };
            if (passedMove.x === finalPosition.x && passedMove.y === finalPosition.y){
                if (tileOccupiedByOpponent(finalPosition, boardState, team))
                    return true;

            }
            if (tileOccupied(passedMove, boardState)){
                break;
            }

        }
        if (finalPosition.x - initialPosition.x === -i && finalPosition.y - initialPosition.y === -i){
            return true;
        }
    }
}