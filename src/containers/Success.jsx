import React from 'react';
import '../Styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Nombre, Gracias por tu compra</h2>
        <span>Te estaremos avisando el estado de tu pedido</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export { Success };
