import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CollectionPreview from './CollectionPreview';

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop);

  return (
    <S.CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </S.CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;

// Styled Components
const S = {};

S.CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
