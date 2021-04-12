import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './userSlice';
import cartReducer from './cartSlice';

const reducer = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
