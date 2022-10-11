import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/components/Header.css';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to={'/'}>Free-trade</Link>{' '}
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export { Header };
