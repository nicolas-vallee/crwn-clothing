import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './userSlice';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
