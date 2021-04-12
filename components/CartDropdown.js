import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import CustomButton from './CustomButton';

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <S.CartDropdownContainer>
      <S.CartItems>
        {!cartItems.length && <span>Your cart is empty.</span>}
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </S.CartItems>
      <S.CheckoutButton>Go to checkout</S.CheckoutButton>
    </S.CartDropdownContainer>
  );
};

export default CartDropdown;

// Styled Components
const S = {};

S.CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

S.CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

S.CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
