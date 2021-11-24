import GameModePicker from './comopnents/GameModePicker';
import GameField from './comopnents/GameField';
import HoverSquaresList from './comopnents/HoverSquaresList';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='game-section'>
        <GameModePicker />
        <GameField />
      </div>
      <HoverSquaresList />
    </div>
  );
}

export default App;
