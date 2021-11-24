import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addHoveredSquare, removeHoveredSquare } from '../../store/gameSlice';
import './gamefield.scss';

const GameField = () => {
  const dispatch = useDispatch();
  const squaresToDraw = useSelector((state) => state.game.squaresToDraw);
  // Юзаю юзреф, чтобы менять значение и при этом не триггерить рирендер
  const selectedRow = useRef(null);

  const handleHover = (e) => {
    if (e.target.style.backgroundColor === 'blue') {
      e.target.style.backgroundColor = 'white';
      dispatch(
        removeHoveredSquare({ row: selectedRow.current, col: e.target.id })
      );
    } else {
      e.target.style.backgroundColor = 'blue';
      dispatch(
        addHoveredSquare({ row: selectedRow.current, col: e.target.id })
      );
    }
  };

  const getRowNumber = (e) => {
    selectedRow.current = e.currentTarget.id;
  };

  const buildField = () => {
    const rows = [];
    const squares = [];

    // к-ство квадратиком статик, поэтому мож юзать индекс как ключ
    // но если надо чтобы при смене мода поле чистилось, можно поставить в ключ какой-то большой Math.random

    for (let j = 0; j < squaresToDraw; j++) {
      squares.push(
        <div
          className='square'
          key={j}
          id={j + 1}
          onMouseEnter={(e) => handleHover(e)}
        ></div>
      );
    }

    for (let i = 0; i < squaresToDraw; i++) {
      rows.push(
        <div
          className='row'
          id={i + 1}
          key={i}
          onMouseEnter={(e) => getRowNumber(e)}
        >
          {squares}
        </div>
      );
    }

    return rows;
  };

  return <div className='game-field-container'>{buildField()}</div>;
};

export default GameField;
