import { configureStore } from '@reduxjs/toolkit';
import GameReducer from './components/GameSlice';

export default configureStore({
  reducer: {
      games: GameReducer
  },
});

