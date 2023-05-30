import tile from "../components/tile";
import {Piece, Position, samePosition, TeamType} from "../const";
import {tileOccupied, tileOccupiedByOpponent} from "./GeneralRule";

export const pawnMove = (initialPosition: Position, finalPosition: Position, team: TeamType, boardState: Piece[]) => {
    const pawnDirection = (team === TeamType.PLAYER) ? 1 : -1;
    const specialMove = (team === TeamType.PLAYER) ? 1 : 6;
    // const piece = boardState.find((p) => samePosition(p.position, finalPosition) && p.team !== team);
    //
    // if (specialMove) {
    //     if (initialPosition.x === finalPosition.x && finalPosition.y - initialPosition.y === 1 * pawnDirection) {
    //         if (!piece) {
    //             return true;
    //         }
    //     } else if (initialPosition.x === finalPosition.x && finalPosition.y - initialPosition.y === 2 * pawnDirection) {
    //         if (!piece && tileOccupied({x: finalPosition.x, y: finalPosition.y - pawnDirection}, boardState)) {
    //             return true;
    //         }
    //     }
    // } else if (initialPosition.x === finalPosition.x && finalPosition.y - initialPosition.y === 1 * pawnDirection) {
    //     if (!piece) {
    //         return true;
    //     }
    // } else if (Math.abs(initialPosition.x - finalPosition.x) === 1 && finalPosition.y - initialPosition.y === 1 * pawnDirection) {
    //     if (piece) {
    //         return true;
    //     }
    // }
    //
    // return false;
    //
    // if (initialPosition.x === finalPosition.x && finalPosition.y - initialPosition.y === 1 * pawnDirection) {
    //     if (!tileOccupied(finalPosition, boardState)) {
    //         return true;
    //     }
    // } else if (specialMove && initialPosition.x === finalPosition.x && finalPosition.y - initialPosition.y === 2 * pawnDirection) {
    //     if (!tileOccupied(finalPosition, boardState) && tileOccupied({x: finalPosition.x, y: finalPosition.y - pawnDirection}, boardState)) {
    //         return true;
    //     }
    // }
    // else if (Math.abs(initialPosition.x - finalPosition.x) === 1 && finalPosition.y - initialPosition.y === 1 * pawnDirection) {
    //     if (tileOccupied(finalPosition, boardState)) {
    //         return true;
    //     }
    // }

    if (
        initialPosition.x === finalPosition.x &&
        initialPosition.y === specialMove &&
       finalPosition.y - initialPosition.y === 2 * pawnDirection
    ) {
        if (
            !tileOccupied(finalPosition, boardState) &&
            !tileOccupied({x: finalPosition.x, y: finalPosition.y - pawnDirection}, boardState)
        ) {
            return true;
        }
    } else if (
        initialPosition.x === finalPosition.x &&
        finalPosition.y - initialPosition.y === pawnDirection
    ) {
        if (!tileOccupied(finalPosition, boardState)) {
            return true;
        }
    }
    else if (
        finalPosition.x - initialPosition.x === -1 &&
        finalPosition.y - initialPosition.y === pawnDirection
    ) {
        //Cheo trai
        if (tileOccupiedByOpponent(finalPosition, boardState, team)) {
            return true;
        }
    } else if (
        finalPosition.x - initialPosition.x === 1 &&
        finalPosition.y - initialPosition.y === pawnDirection
    ) { //Cheo phai
        if (tileOccupiedByOpponent(finalPosition, boardState, team)) {
            return true;
        }
    }
    // generate en passant rule


    return false;

}

//preview
export const getPawnMoves = (pawn: Piece, boardState: Piece[]): Position[] => {
    const possibleMoves: Position[] = [];
    const pawnDirection = (pawn.team === TeamType.PLAYER) ? 1 : -1;
    const specialMove = (pawn.team === TeamType.PLAYER) ? 1 : 6;

    if (!tileOccupied({x: pawn.position.x, y: pawn.position.y + pawnDirection}, boardState)) {
        possibleMoves.push({x: pawn.position.x, y: pawn.position.y + pawnDirection});
        if(pawn.position.y === specialMove && !tileOccupied({x: pawn.position.x, y: pawn.position.y + 2 * pawnDirection}, boardState)){
            possibleMoves.push({x: pawn.position.x, y: pawn.position.y + 2 * pawnDirection});
        }
        
    }
    return possibleMoves;
}