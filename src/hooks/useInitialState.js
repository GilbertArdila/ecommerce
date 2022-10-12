import React, { useState } from 'react';
import InitialState from '../initialState';
const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (item, currentIndex) => currentIndex !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder,
  };
};
export { useInitialState };
