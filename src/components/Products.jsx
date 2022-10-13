import React, { useState, useRef, useContext } from 'react';
import { Product } from './Product';
import '../Styles/components/Product.css';
import { Searcher } from './Searcher';
import { AppContext } from '../context/AppContext';

const Products = () => {

  const { products, addToCart } = useContext(AppContext);
  console.log(products)
  const [productos, setProductos] = useState(products);
  console.log(`estos son los productos ${productos}`)
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
