import React from 'react';
import { useSelector } from 'react-redux';
// import Head from 'next/head';
// import styled from 'styled-components';
import CollectionPreview from '../components/CollectionPreview';

const ShopPage = () => {
  const collections = useSelector((state) => state.shop);

  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
