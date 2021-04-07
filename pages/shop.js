import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import SHOP_DATA from '../data/shopData';
import CollectionPreview from '../components/CollectionPreview';

const shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default shop;
