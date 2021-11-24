import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    usersGameMode: null,
    squaresToDraw: null,
    hoveredSquares: [],
  },
  reducers: {
    pickGameMode: (state, action) => {
      return { ...state, usersGameMode: action.payload };
    },
    setGameField: (state, action) => {
      return { ...state, squaresToDraw: action.payload.field };
    },
    addHoveredSquare: (state, action) => {
      return {
        ...state,
        hoveredSquares: [...state.hoveredSquares, action.payload],
      };
    },
    removeHoveredSquare: (state, action) => {
      return {
        ...state,
        hoveredSquares: state.hoveredSquares.filter(
          (square) =>
            square.row !== action.payload.row ||
            square.col !== action.payload.col
        ),
      };
    },
  },
});

export const {
  pickGameMode,
  setGameField,
  addHoveredSquare,
  removeHoveredSquare,
} = gameSlice.actions;
export default gameSlice.reducer;
