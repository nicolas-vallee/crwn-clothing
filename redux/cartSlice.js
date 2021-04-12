import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartHidden: true };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.cartHidden = !state.cartHidden;
    },
  },
});

export const { toggleCartHidden } = cartSlice.actions;
export default cartSlice.reducer;
