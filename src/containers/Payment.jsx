import React,{useContext} from 'react';
import '../Styles/components/Pyment.css';
import { AppContext } from '../context/AppContext';

const Payment = () => {
  const{state}=useContext(AppContext);
  const{cart}=state;
  console.log(cart)

  const handleTotalAmoun=()=>{
    const reducer=(sum,currentValue)=>sum+currentValue.price
    const sum=cart.reduce(reducer,0);
    return sum;
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item)=>(
          <div className="Payment-resume">
             <img src={item.image} alt={item.title} />
             <h2>{item.title}</h2>
          <span>${item.price}</span>

          </div>
         
        ))}
        <span>total: ${handleTotalAmoun()}</span>
        <div className="Payment-button">Botón de pago con Paypal</div>
      </div>
      <div></div>
    </div>
  );
};

export { Payment };
