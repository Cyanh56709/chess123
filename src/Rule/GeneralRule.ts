import {Piece, Position, samePosition, TeamType} from "../const";

export const tileOccupied = (position: Position, boardState: Piece[]) => {
    const piece = boardState.find((p) => samePosition(p.position, position));
    return !!piece;
}

export const tileOccupiedByOpponent = (position: Position, boardState: Piece[], team: TeamType) => {
    const piece = boardState.find((p) => samePosition(p.position, position) && p.team !== team);
    return !!piece;
}