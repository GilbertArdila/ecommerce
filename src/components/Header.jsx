import React from 'react';
import '../Styles/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">E-commerce</h1>
      <div className="Header-checkout">Checkout</div>
    </header>
  );
};

export { Header };
