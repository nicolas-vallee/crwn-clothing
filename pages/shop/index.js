import React from 'react';
import Head from 'next/head';
import CollectionsOverview from '../../components/CollectionsOverview';

const ShopPage = () => {
  return (
    <div>
      <Head>
        <title>CRWN Clothing | Shop</title>
      </Head>
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
