import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useGetGameModesQuery } from '../../services/starnavi';
import { setGameField, pickGameMode } from '../../store/gameSlice';
import './gamemodepicker.scss';

const GameModePicker = () => {
  const dispatch = useDispatch();
  // так как юзаю ридакс тулким кверрис, то там уже встроенлоадинг с эррор хендлинг
  const { data, error, isLoading } = useGetGameModesQuery();
  const [usersGameMode, setUsersGameMode] = useState(null);
  // юзаем чтобы делать проверку и не делать лишние рирендеры
  const gameModeFromStore = useSelector((state) => state.game.usersGameMode);

  // когда юзер выбирает гейммод и нажимает старт - меняем в сторе к-ство квдратиков для поля
  const startGame = () => {
    if (
      usersGameMode &&
      usersGameMode !== 'loading' &&
      gameModeFromStore !== usersGameMode
    ) {
      dispatch(pickGameMode(usersGameMode));
      return dispatch(setGameField(data[usersGameMode]));
    }
  };

  return (
    <div className='game-mode-picker-wrapper'>
      {/* Если ошибка - выводим месседж */}
      {error ? (
        <div className='game-mode-error'>Something went wrong.</div>
      ) : (
        // Если isLoading (загрузка данных) то блочим дропдавн
        <select
          name='gamemode'
          id='gamemode'
          disabled={isLoading}
          value={usersGameMode ?? ''}
          onChange={(e) =>
            usersGameMode !== e.target.value && setUsersGameMode(e.target.value)
          }
        >
          <option value='' hidden>
            Pick mode
          </option>
          {/* Если загрузка, то есть только один опшн */}
          {(isLoading && <option value='loading'>Loading...</option>) ||
            // Название каждого мода уникальное --> мож юзать как ключ
            Object.keys(data).map((gamemode) => (
              <option value={gamemode} key={gamemode}>
                {gamemode}
              </option>
            ))}
        </select>
      )}
      <button className='start-game-btn' onClick={startGame}>
        <div>START</div>
      </button>
    </div>
  );
};

export default GameModePicker;
