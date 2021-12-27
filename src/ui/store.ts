import { configureStore } from '@reduxjs/toolkit';
import spriteReducer, { SpriteReducerState } from '../reducers/spriteReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { spriteApi } from '../services/spriteApi';
import engineReducer, { EngineReducerState } from '../engine/engineReducer';

export interface ReducersState {
  sprite: SpriteReducerState;
  engine: EngineReducerState;
}

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
    engine: engineReducer,
    [spriteApi.reducerPath]: spriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spriteApi.middleware),
});

setupListeners(store.dispatch);

export default store;
