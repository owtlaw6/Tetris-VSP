import logo from './logo.svg';
import './App.css';
import Tetromino from './Tetromino';
import { useCallback, useRef, useState } from "react";
import { useGameTime } from './hooks/useGameTime' 
import { RightPannel } from './RightPannel/RightPannel.js' 
import { TileBoard } from './TileBoard/TileBoard.js' 
import { getEmptyBoard } from './utils/utils';

function App() {
  const onTick = () => {
    console.log('tic tic')
  };
  
  const [speed, setSpeed] = useState(1000);
  const { isRunning, startTime, stopTime } = useGameTime({ onTick, speed });
  const [board] = useState(getEmptyBoard);

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
