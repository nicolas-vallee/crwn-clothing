import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartHidden: true, cartItems: [] };

const groupItemsInCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.cartHidden = !state.cartHidden;
    },
    addItemToCart(state, action) {
      state.cartItems = groupItemsInCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCartHidden, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
