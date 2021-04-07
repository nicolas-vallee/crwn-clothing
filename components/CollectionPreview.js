import React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </S.Preview>
    </S.Container>
  );
};

export default CollectionPreview;

// Styled Components
const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

S.Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

S.Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
