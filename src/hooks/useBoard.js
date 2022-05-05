import { useEffect, useState, useRef, useCallback } from 'react';
import { ActiveTetro } from '../classes/ActiveTetro';
import { randomTetromino } from "../tetrominos";
import { DIRECTION, getEmptyBoard, getOppositeDirection } from '../utils/utils';

export const useBoard = () => {
    const [board, setBoard] = useState(getEmptyBoard());
    const player = useRef(new ActiveTetro());

    useEffect(() => { /*updateBoard();*/ }, [])  
    useEffect(() => {
        const listener = (event) => {
            var name = event.key;
            const isCollided = player.current.checkCollision(board);
            if (name === "a"){
                player.current.eraseFrom(board);
                player.current.currentPos.column -= 1;
                const isCollided = player.current.checkCollision(board);
                if(isCollided){
                    player.current.currentPos.column += 1;
                }
                player.current.drawOn(board); 
            } else if (name === "d"){
                player.current.eraseFrom(board);
                player.current.currentPos.column += 1;
                if(isCollided){
                    player.current.currentPos.column -= 1;
                }
                player.current.drawOn(board); 
            }
        };
        
    })  

    const moveLeft = () => {
        updateBoard(DIRECTION.left);
    }
    const moveRight = () => {
        updateBoard(DIRECTION.right);
    }
    const moveDown = () => {
        updateBoard(DIRECTION.down);
    }
    const rotate = () => {
        player.current.eraseFrom(board);
        let output = player.current.tetromino.shape[0].map((_, colIndex) => player.current.tetromino.shape.map(row => row[colIndex]));

        player.current.tetromino.shape = output;
        if(player.current.checkCollision(board)){
           output = player.current.tetromino.shape[0].map((_, colIndex) => player.current.tetromino.shape.map(row => row[colIndex]));
           output = output[0].map((_, colIndex) => output.map(row => row[colIndex]));
           output = output[0].map((_, colIndex) => output.map(row => row[colIndex]));
           player.current.tetromino.shape = output;
        }
        player.current.drawOn(board);
    }

    const updateBoard = (direction = DIRECTION.down) => {
        player.current.eraseFrom(board);
        player.current.updatePosition(direction);

        let isCollided = player.current.checkCollision(board);
        if(isCollided){
            player.current.updatePosition(getOppositeDirection(direction));
        }
        player.current.drawOn(board);

        if(isCollided && (direction === DIRECTION.down)){
            player.current = new ActiveTetro();
        }

        setBoard([...board]);
    }

    return [updateBoard, board, moveLeft, moveRight, moveDown, rotate];
}

