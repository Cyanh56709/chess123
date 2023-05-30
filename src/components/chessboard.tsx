import React, {useRef, useState} from "react";
import audioFile from '../assets/move_sound.mp3';

import "./chessboard.css"
import Tile from "./tile";
import Rule from "../Rule/rule";
import {
    GRID_SIZE,
    initialBoardState,
    Piece,
    PieceType,
    Position,
    samePosition,
    TeamType,
    VERTICAL_AXIS,
} from "../const";


export default function Chessboard() {
    const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
    const chessBoardRef = useRef<HTMLDivElement>(null);
    const [grabPosition, setGrabPosition] = useState<Position>({x: 0, y: 0});
    let [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const Rules = new Rule();
    const audio = new Audio(audioFile);

    function updateValidMoves(){
        setPieces(currentPieces => {
            return currentPieces.map(p => {
                p.possibleMoves = Rules.getValidMoves(p, currentPieces);
                return p;
            })
        });
    }


    function grabPiece(e: React.MouseEvent){
        updateValidMoves();
        const element = e.target as HTMLElement;
        const chessboard = chessBoardRef.current;
        if (element.classList.contains("chess-piece") && chessboard) {
            const grabX = Math.floor( (e.clientX - chessboard.offsetLeft)/GRID_SIZE);
            const grabY = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / GRID_SIZE));
            setGrabPosition({x: grabX, y: grabY});
            const x = e.clientX - GRID_SIZE/2;
            const y = e.clientY - GRID_SIZE/2;
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            setActivePiece(element);
        }
    }

    function movePiece(e: React.MouseEvent){
        const chessboard = chessBoardRef.current;
        if (activePiece && chessboard) {
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop - 25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
            const x = e.clientX - GRID_SIZE/2;
            const y = e.clientY - GRID_SIZE/2;
            activePiece.style.position = "absolute";
            // KO CHO KEO QUAN RA KHOI BAN CO
            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            }
            else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            }
            else {
                activePiece.style.left = `${x}px`;
            }
            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            }
            else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            }
            else {
                activePiece.style.top = `${y}px`;
            }
        }
    }

    // Note: Thi thoảng xảy ra bug nếu kéo quân cờ ra khỏi bàn cờ thì quân cờ sẽ bị mất hoặc kẹt ở đâu đó :/
    function mouseUp( e: React.MouseEvent  ){
        const chessboard = chessBoardRef.current;

        if(activePiece && chessboard){
            const x = Math.floor( (e.clientX - chessboard.offsetLeft)/100);
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100));

            const currentPiece = pieces.find((p) => samePosition(p.position, grabPosition));

            if (currentPiece) {
                const validMove = Rules.isValidMove(
                    grabPosition,
                    {x , y},
                    currentPiece.type,
                    currentPiece.team,
                    pieces
                );

                if (validMove) {
                    const UpdatedPieces = pieces.reduce((results, piece) => {
                        if (samePosition(piece.position, grabPosition)) {
                            console.log("grabPosition", grabPosition);
                            piece.position.x = x;
                            piece.position.y = y;
                            results.push(piece);

                            let promotionRow = (piece.team === TeamType.PLAYER) ? 7 : 0;

                            if (piece.type === PieceType.PAWN && piece.position.y === promotionRow) {
                                piece.type = PieceType.QUEEN;
                                piece.image = `./public/${piece.team}Q.png`
                            }
                        } else if (!(piece.position.x === x && piece.position.y === y)) {
                            results.push(piece);
                        }
                        return results;
                    }, [] as Piece[]);

                    setPieces(UpdatedPieces);
                    audio.play().then(r => console.log(r));
// tốt chỉ đi được 2 nước đầu vs ăn tốt đen xong không đi dc nuwocs tiếp
                } else {
                    activePiece.style.position = "relative";
                    activePiece.style.removeProperty("top");
                    activePiece.style.removeProperty("left");
                }
            }
            setActivePiece(null);
        }
    }

    let board = [];
    for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
        for (let i = 0; i < VERTICAL_AXIS.length; i++) {
            const number = j + i + 2;
            const piece = pieces.find(p => samePosition(p.position, {x: i, y: j}));
            let image = piece ? piece.image : undefined;

            // load image if piece is on this tile
            pieces.forEach(p => {
                if (p.position.x === i && p.position.y === j) {
                    image = p.image;
                }
            })

            let currentPiece= activePiece != null ? pieces.find((p) => samePosition(p.position, grabPosition)): undefined;
            let preview = currentPiece?.possibleMoves ? currentPiece.possibleMoves.some(p =>
                samePosition(p,{x:i, y:j}) ) : false;

            board.push(
                <Tile key={`${j},${i}`} image={image} number={number} preview={preview} />
            );
        }
    }
    return (
        <>
            <div
        onMouseMove={e => movePiece(e)}
        onMouseDown={e =>  grabPiece(e)}
        onMouseUp={e => mouseUp(e)}
        id="chessboard" ref={chessBoardRef}>{board}
            </div>

        </>
    );
}