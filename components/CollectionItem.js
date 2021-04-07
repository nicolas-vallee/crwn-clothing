import React from 'react';
import styled from 'styled-components';

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
    </S.Container>
  );
};

export default CollectionItem;

// Styled Components
const S = {};

S.Container = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
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
