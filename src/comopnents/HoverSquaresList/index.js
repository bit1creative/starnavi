import { useSelector } from 'react-redux';
import HoverSquareCard from '../HoverSquareCard';
import './hoversquarelist.scss';

const HoverSquaresList = () => {
  const hoveredSquares = useSelector((state) => state.game.hoveredSquares);

  return (
    <div className='hover-squares-list-container'>
      <h1 className='hover-squared-h1'>Hover squares</h1>
      {hoveredSquares.map((square) => (
        <HoverSquareCard square={square} key={`${square.row}-${square.col}`} />
      ))}
    </div>
  );
};

export default HoverSquaresList;
