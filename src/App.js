import logo from './logo.svg';
import './App.css';
import Tetromino from './Tetromino';

function App() {
<<<<<<< Updated upstream
=======
  const [speed, setSpeed] = useState(1000);
  const [updateBoard, board] = useBoard();

  const onTick = useCallback(() => {
    console.log('tic tic');
    updateBoard();
  }, []);
  
  const { isRunning, startTime, stopTime } = useGameTime({ onTick, speed });

>>>>>>> Stashed changes
  return (
    <div className="container"> 
      <div className="board">
        <Tetromino /> 
        <div className="item"> 
        </div>
      </div> 
      
    </div>
  );
}

export default App;
