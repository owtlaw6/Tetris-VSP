import logo from './logo.svg';
import './App.css';
import Tetromino from './Tetromino';

function App() {
<<<<<<< Updated upstream
  return (
    <div className="container"> 
      <div className="board">
        <Tetromino /> 
        <div className="item"> 
        </div>
      </div> 
=======
  const [speed, setSpeed] = useState(1000);
  const [updateBoard, board, moveLeft, moveRight, moveDown, rotate] = useBoard();

  const onTick = useCallback(() => {
    console.log('tic tic');
    updateBoard();
  }, []);
  
  const { isRunning, startTime, stopTime } = useGameTime({ onTick, speed });
  return (
    <div className="container"> 
      
      <TileBoard board={board}>
        
      </TileBoard> 
      <RightPannel>
      <button onClick={startTime} disabled={isRunning}>START</button>
        <button onClick={stopTime} disabled={!isRunning}>STOP</button>
        <button onClick={() => setSpeed((prev) => prev - 100)} /*disabled={!isRunning}*/>GO FASTER</button>
        <button onClick={moveLeft}>LEFT</button>
        <button onClick={moveRight}>RIGHT</button>
        <button onClick={moveDown}>MOVE FASTER</button>
        <button onClick={rotate}>ROTATE</button>
        <span>time is {isRunning ? "curge" : "not curge"}</span>
      </RightPannel>

>>>>>>> Stashed changes
      
    </div>
  );
}

export default App;
