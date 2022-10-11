import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title"><Link to={'/'}>Free-trade</Link> </h1>
      <div className="Header-checkout"><Link to='/checkout'><i class="fa-solid fa-cart-shopping"></i></Link></div>
    </header>
  );
};

export { Header };
