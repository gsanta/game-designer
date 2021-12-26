import { configureStore } from '@reduxjs/toolkit';
import spriteReducer from '../reducers/spriteReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { spriteApi } from '../services/spriteApi';

const store = configureStore({
  reducer: {
    sprite: spriteReducer,
    [spriteApi.reducerPath]: spriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spriteApi.middleware),
});

setupListeners(store.dispatch);

export default store;
