import { configureStore } from '@reduxjs/toolkit';
import spriteReducer from '../reducers/spriteReducer';

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
  },
});

export default store;
