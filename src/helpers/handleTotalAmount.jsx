import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const handleTotalAmount = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const TotalAmount = cart.reduce(reducer, 0);
  return TotalAmount;
};

export { handleTotalAmount };
