import React from 'react';
import { Helmet } from 'react-helmet';
import { Products } from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Free-trade store-products</title>
      </Helmet>
      <Products />
    </>
  );
};

export { Home };
