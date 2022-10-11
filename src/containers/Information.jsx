import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/components/Information.css';
import {AppContext} from '../context/AppContext';

const Information = () => {
const {state}=useContext(AppContext);
const {cart}=state
console.log(cart)

const handleTotalAmoun=()=>{
  const reducer=(sum,currentValue)=>sum+currentValue.price
  const sum=cart.reduce(reducer,0);
  return sum;
}
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="text" name="email" placeholder="Correo electronico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input
              type="text"
              name="apto"
              placeholder="Datos complementarios"
            />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="state" placeholder="Departamento" />
            <input type="text" name="cp" placeholder="Código postal" />
            <input type="text" name="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <Link to={'/checkout/payment'}>Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item)=>(
                  <div className="Information-item">
                  <div className="Information-element">
                    <h4>{item.title}</h4>
                    <span>${item.price}</span>
                  </div>
                </div>
        ))}
         <span>total:${handleTotalAmoun()}</span>
      </div>
    </div>
  );
};

export { Information };
