import React, { useState, useRef } from 'react';
import { Product } from './Product';
import '../Styles/components/Product.css';
import {Searcher} from './Searcher';

const Products = ({ products }) => {
  const [productos, setProductos] = useState(products);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

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
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { Products };