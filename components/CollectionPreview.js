import React from 'react';
import styled from 'styled-components';

const CollectionPreview = ({ title, items }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}>{item.name} </div>
          ))}
      </S.Preview>
    </S.Container>
  );
};

export default CollectionPreview;

// Styled Components
const S = {};

S.Container = styled.div``;

S.Title = styled.h1`
  text-transform: uppercase;
`;

S.Preview = styled.div``;
