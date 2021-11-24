import './hoversquarecard.scss';

const HoverSquareCard = ({ square }) => {
  return (
    <div className='hover-square-card'>
      <span>{`row ${square.row} col ${square.col}`}</span>
    </div>
  );
};

export default HoverSquareCard;
