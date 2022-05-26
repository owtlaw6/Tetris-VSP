import logo from './logo.svg';
import './App.css';
import Tetromino from './Tetromino';
import { useCallback, useRef, useState, useEffect } from "react";
import { useGameTime } from './hooks/useGameTime' 
import { RightPannel } from './RightPannel/RightPannel.js' 
import { TileBoard } from './TileBoard/TileBoard.js' 
import { getEmptyBoard } from './utils/utils';
import { randomTetromino } from './tetrominos.js'
import { useBoard } from './hooks/useBoard';

function App() {
  const [speed, setSpeed] = useState(1000);
  const [updateBoard, board, moveLeft, moveRight, moveDown, rotateLeft, initializePlayer, gameOver] = useBoard();
  const onTick = useCallback(() => {
    console.log('tic tic');
    updateBoard();
  }, [board]);
  
  const { isRunning, startTime, stopTime } = useGameTime({ onTick, speed });

  useEffect(() => {
    if(gameOver && isRunning){
      stopTime();
    }
  }, [gameOver])
  
  return (
    <div className="container"> 
      <TileBoard board={board}>
        
      </TileBoard> 
      <RightPannel>
      <button onClick={() => {initializePlayer(); startTime()}} disabled={isRunning && !gameOver}>START</button>
        <button onClick={stopTime} disabled={!isRunning || gameOver}>STOP</button>
        <button onClick={() => setSpeed((prev) => prev - 100)} /*disabled={!isRunning}*/>GO FASTER</button>
        <button onClick={moveLeft}>LEFT</button>
        <button onClick={moveRight}>RIGHT</button>
        <button onClick={moveDown}>MOVE FASTER</button>
        <button onClick={rotateLeft}>ROTATE</button>
        <span>time is {isRunning ? "curge" : "not curge"}</span>
      </RightPannel>
      
    </div>
  );
}

export default App;
