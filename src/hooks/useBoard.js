import { useEffect, useState, useRef, useCallback } from 'react';
import { ActiveTetro } from '../classes/ActiveTetro';
import { randomTetromino } from "../tetrominos";
import { DIRECTION, getEmptyBoard, getOppositeDirection } from '../utils/utils';


export const useBoard = () => {
    const [board, setBoard] = useState(getEmptyBoard());
    const player = useRef(new ActiveTetro());
    /*const isFirstRender = useRef(true);
    if(isFirstRender.current === true){
        player.current.drawOn(board);
        isFirstRender.current = false;
        setBoard([...board]);
    }*/

    const initializePlayer = () => {
        player.current = new ActiveTetro();
        player.current.drawOn(board);
        setBoard([...board]);
    }

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

    /*const rotate = () => {
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
    }*/

    const rotateRight = () => {
        player.current.eraseFrom(board);
        var result = [];
        player.current.tetromino.shape.forEach(function (a, i, aa) {
            a.forEach(function (b, j, bb) {
                result[bb.length - j - 1] = result[bb.length - j - 1] || [];
                result[bb.length - j - 1][i] = b;
            });
        });
        player.current.tetromino.shape = result;
        player.current.drawOn(board);
    }
    
    const rotateLeft = () => {
        player.current.eraseFrom(board);
        var result = [];
        player.current.tetromino.shape.forEach(function (a, i, aa) {
            a.forEach(function (b, j, bb) {
                result[j] = result[j] || [];
                result[j][aa.length - i - 1] = b;
            });
        });
        player.current.tetromino.shape = result;
        if(player.current.checkCollision(board)){
            rotateRight();
        } else {
            player.current.drawOn(board);
        }
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
            let linesToErase = [];
            for(let i = 0; i < 20; i++){
                let isLineComplete = true;
                for(let j = 0; j < 12; j++){
                    if(board[i][j] === null){
                        isLineComplete = false;
                    }
                }
                if(isLineComplete){
                    linesToErase.push(i);
                }
            }
            eraseLines(linesToErase, board);
            player.current = new ActiveTetro();
            player.current.drawOn(board);

        }
        setBoard([...board]);
    }

    function eraseLines(linesToErase, board){
        for(let i = 0; i < linesToErase.length; i++){
            let lineIndex = linesToErase[i] - i;
            for(let m = lineIndex; m > 0; m--){
                for(let n = 0; n < 12; n++){
                    board[m][n] = board[m - 1][n];
                }
            }
        }
    } 

    return [updateBoard, board, moveLeft, moveRight, moveDown, rotateLeft, initializePlayer];
}

