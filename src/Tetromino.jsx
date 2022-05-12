/*import React from "react";
import { TETROMINOS } from './tetrominos'

function Tetromino(){
    const squares = [];
    for(let i = 0; i < TETROMINOS.length; i++){
        for(let j = 0; j < TETROMINOS[i].length; j++){
            if(TETROMINOS[i][j] == true){
                squares.push({row: i+1, col: j+1});
            }
        }
    }
    //console.log(squares);
    return( <>{squares.map (({row, col}) => 
        (<div style={{gridRowStart: row, gridRowEnd: row+1, gridColumnStart: col, gridColumnEnd: col+1, backgroundColor: "red", }}> 
        </div>))}</>
    );
}

export default Tetromino*/