import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CollectionItem from '../../components/CollectionItem';

const CollectionPage = ({ sectionName }) => {
  const collection = useSelector((state) => state.shop[sectionName]);
  const { title, items } = collection;

  return (
    <S.CollectionPageContainer>
      <S.CollectionTitle>{title}</S.CollectionTitle>
      <S.CollectionItemsContainer>
        {items.map((item) => (
          <S.CollectionItem key={item.id} item={item} />
        ))}
      </S.CollectionItemsContainer>
    </S.CollectionPageContainer>
  );
};

export default CollectionPage;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        section: 'hats',
      },
    },
    {
      params: {
        section: 'sneakers',
      },
    },
    {
      params: {
        section: 'jackets',
      },
    },
    {
      params: {
        section: 'mens',
      },
    },
    {
      params: {
        section: 'womens',
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const sectionName = context.params.section;
  return {
    props: { sectionName },
  };
}

// Styled Components
const S = {};

S.CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

S.CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

S.CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

S.CollectionItem = styled(CollectionItem)`
  margin-bottom: 30px;
`;
