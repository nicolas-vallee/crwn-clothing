import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { name, imageUrl, quantity, price } }) => {
  return (
    <S.CartItemContainer>
      <S.CartItemImage src={imageUrl} alt={name} />
      <S.CartItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </S.CartItemDetails>
    </S.CartItemContainer>
  );
};

export default CartItem;

// Styled Components
const S = {};

S.CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

S.CartItemImage = styled.img`
  width: 30%;
`;

S.CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  & span:first-child {
    font-size: 16px;
  }
`;
