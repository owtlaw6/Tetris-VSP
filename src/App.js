import logo from './logo.svg';
import './App.css';
import Tetromino from './Tetromino';
import { useCallback, useRef, useState } from "react";
import { useGameTime } from './hooks/useGameTime' 
import { RightPannel } from './RightPannel/RightPannel.js' 
import { TileBoard } from './TileBoard/TileBoard.js' 
import { getEmptyBoard } from './utils/utils';
import { randomTetromino } from './tetrominos.js'
import { useBoard } from './hooks/useBoard';

function App() {
  const [speed, setSpeed] = useState(1000);
  const [updateBoard, board] = useBoard();

  const onTick = useCallback(() => {
    console.log('tic tic');
    updateBoard();
  }, []);
  
  const { isRunning, startTime, stopTime } = useGameTime({ onTick, speed });

  /*shape.forEach((row, rowIdx) => {
    row.forEach((val, colIdx) => {
      const row = startingPosition.row + rowIdx;
      const column = startingPosition.column + colIdx;

      if(val === true){
        board[row][column] = color;
      }

    });
  });*/  

  return (
    <div className="container"> 
      
      <TileBoard board={board}>
        
      </TileBoard> 
      <RightPannel>
      <button onClick={startTime} disabled={isRunning}>START</button>
        <button onClick={stopTime} disabled={!isRunning}>STOP</button>
        <button onClick={() => setSpeed((prev) => prev - 100)} /*disabled={!isRunning}*/>GO FASTER</button>
        <span>time is {isRunning ? "curge" : "not curge"}</span>
      </RightPannel>

      
    </div>
  );
}

export default App;
