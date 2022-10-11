import React from 'react';
import '../Styles/components/Pyment.css'

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        <div className="Payment-button">
          Botón de pago con Paypal
        </div>
      </div>
      <div></div>
    </div>
  );
};

export { Payment };
