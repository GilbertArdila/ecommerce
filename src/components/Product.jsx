import React from 'react';
import '../Styles/components/Product.css';

const Product = ({ product }) => {
  return (
    <div className="Products-item">
      <img
        src={product.image}
        alt={product.title}
        className="Product-item_image"
      />
      <div className="product-item_info">
        <h2 className="Product-item_title">{product.title}</h2>
        <h2 className="Product-item_price">${product.price}</h2>
        <h2 className="Product-item_description">{product.description}</h2>
      </div>
      <button className="Product-item_button" type="button">
        Comprar
      </button>
    </div>
  );
};

export { Product };
