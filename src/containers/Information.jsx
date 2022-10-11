import React from 'react';
import '../Styles/components/Information.css';

const Information = () => {
  return(
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
             <input type="text" name="name" placeholder='Nombre completo' />
             <input type="text" name="email" placeholder='Correo electronico' />
             <input type="text" name="address" placeholder='Dirección' />
             <input type="text" name="apto" placeholder='Datos complementarios' />
             <input type="text" name="city" placeholder='Ciudad' />
             <input type="text" name="state" placeholder='Departamento' />
             <input type="text" name="cp" placeholder='Código postal' />
             <input type="text" name="phone" placeholder='Teléfono' />

          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>

  )
};

export { Information };
