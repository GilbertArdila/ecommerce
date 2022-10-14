import React, { useState, useRef, useContext, useEffect } from 'react';
import { Product } from './Product';
import '../Styles/components/Product.css';
import { Searcher } from './Searcher';
import { AppContext } from '../context/AppContext';

const API =
  'https://free-trade-store-default-rtdb.firebaseio.com/products.json';

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  const { addToCart } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };
  const filteredProducts = productos.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="Products">
      <Searcher
        handleSearch={handleSearch}
        search={search}
        searchInput={searchInput}
      />
      <div className="Products-items">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
