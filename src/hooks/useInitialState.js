import React, { useState,useEffect } from 'react';
import InitialState from '../initialState';
import axios from 'axios';

const API='http://localhost:1337/api/products?populate=%2A';

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response=await axios(API);
    setProducts(response.data)
    
  }, [])
  
  

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
    products
  };
};
export { useInitialState };
