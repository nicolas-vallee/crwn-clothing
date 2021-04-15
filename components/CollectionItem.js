import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { addItem } from '../redux/cartSlice';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();
  const handleClick = () => dispatch(addItem(item));

  return (
    <S.Container>
      <S.BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <S.Footer>
        <S.Name>{name}</S.Name>
        <S.Price>${price}</S.Price>
      </S.Footer>
      <S.AddToCartButton isInverted onClick={handleClick}>
        Add to cart
      </S.AddToCartButton>
    </S.Container>
  );
};

export default CollectionItem;

// Styled Components
const S = {};

S.Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  & button {
    display: none;
  }

  &:hover {
    & div:first-child {
      opacity: 0.8;
    }

    & button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

S.BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

S.Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

S.Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

S.Price = styled.span`
  text-align: right;
  width: 20%;
`;

S.AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
`;
