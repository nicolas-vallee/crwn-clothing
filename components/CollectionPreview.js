import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <S.Container>
      <S.Title>
        <Link href={`/shop/${routeName}`}>
          <a>{title}</a>
        </Link>
      </S.Title>
      <S.Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
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
  overflow-x: scroll;
`;
