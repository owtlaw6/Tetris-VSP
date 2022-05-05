import { useEffect, useState, useRef, useCallback } from 'react';
import { ActiveTetro } from '../classes/ActiveTetro';
import { randomTetromino } from "../tetrominos";
import { DIRECTION, getEmptyBoard } from '../utils/utils';

export const useBoard = () => {
    const [board, setBoard] = useState(getEmptyBoard());
    const player = useRef(new ActiveTetro());

    useEffect(() => { /*updateBoard();*/ }, [])    

    const updateBoard = () => {
        player.current.eraseFrom(board);
        player.current.updatePosition(DIRECTION.down);

        let isCollided = player.current.checkCollision(board);
        if(isCollided){
            player.current.updatePosition(DIRECTION.up);
        }
        player.current.drawOn(board);

        if(isCollided){
            player.current = new ActiveTetro();
        }

        setBoard([...board]);
    }

    return [updateBoard, board];
}

