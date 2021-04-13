import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from '../data/shopData';

const initialState = SHOP_DATA;

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
