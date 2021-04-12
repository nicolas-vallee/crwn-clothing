import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag-2.svg';
import { toggleCartHidden } from '../redux/cartSlice';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  const handleClick = () => dispatch(toggleCartHidden());

  return (
    <S.IconContainer onClick={handleClick}>
      <S.Icon />
      <S.Counter>{itemCount}</S.Counter>
    </S.IconContainer>
  );
};

export default CartIcon;

// Styled Components
const S = {};

S.IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

S.Icon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

S.Counter = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
