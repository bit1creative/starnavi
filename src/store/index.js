import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gameModesApi } from '../services/starnavi';
import { gameSlice } from './gameSlice';

export const store = configureStore({
  reducer: {
    [gameModesApi.reducerPath]: gameModesApi.reducer,
    game: gameSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameModesApi.middleware),
});

setupListeners(store.dispatch);
