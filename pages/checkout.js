import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import StripeButton from '../components/StripeButton';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <S.CheckoutPageContainer>
      <Head>
        <title>CRWN Clothing | Checkout</title>
      </Head>
      <S.CheckoutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <S.CheckoutTotal>TOTAL: ${cartTotal}</S.CheckoutTotal>
      <StripeButton price={cartTotal} />
    </S.CheckoutPageContainer>
  );
};

export default CheckoutPage;

// Styled Components
const S = {};

S.CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin: 50px 0 50px auto;
  }
`;

S.CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

S.HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

S.CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
