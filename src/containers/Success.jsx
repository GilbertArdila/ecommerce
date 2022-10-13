import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import '../Styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Te estaremos avisando el estado de tu pedido</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export { Success };
