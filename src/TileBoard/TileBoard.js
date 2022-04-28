import React from "react";
import "./style.css";
import { useBoard } from "../hooks/useBoard";


export function TileBoard({board}){

    const tiles = [];
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            tiles.push({row: i+1, col: j+1, color: board[i][j] || "lightblue"});
        }
    }

    return <div className="tile-board">{tiles.map (({row, col, color}) => 
    (<div style={{gridRowStart: row, gridRowEnd: row+1, gridColumnStart: col, gridColumnEnd: col+1, backgroundColor: color, }}> 
    </div>))}</div>
} 