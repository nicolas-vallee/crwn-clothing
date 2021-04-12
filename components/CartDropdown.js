import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import { toggleCartHidden } from '../redux/cartSlice';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleClick = () => dispatch(toggleCartHidden());

  return (
    <S.CartDropdownContainer>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-cart-message'>Your cart is empty.</span>
        )}
      </S.CartItems>
      <Link href='/checkout' passHref>
        <S.CheckoutButton onClick={handleClick}>
          Go to checkout
        </S.CheckoutButton>
      </Link>
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

  & .empty-cart-message {
    font-size: 18px;
    margin: 50px auto;
  }
`;

S.CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
