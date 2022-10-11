import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/components/Checkout.css';
import {AppContext} from '../context/AppContext';

const Checkout = () => {

const {state,removeFromCart}=useContext(AppContext);
const {cart}=state;

const handleRemove=(product)=>{
  removeFromCart(product);
}

const handleTotalAmoun=()=>{
  const reducer=(sum,currentValue)=>sum+currentValue.price
  const sum=cart.reduce(reducer,0);
  return sum;
}

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length>0 ? <h3>Lista de pedidos</h3>:<><h3>Carrito vacío</h3><i class="fa-solid fa-box-open"></i></>}

        {cart.map((item)=>(
            <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={()=>handleRemove(item)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
       
      </div>
      {cart.length>0 &&(
        <div className="Checkout-sidebar">
        <h3>{`Precio total: $ ${handleTotalAmoun()}`}</h3>
        <Link to={'/checkout/information'}>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
      )}
    </div>
  );
};

export { Checkout };
