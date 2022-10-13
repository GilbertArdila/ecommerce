import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGoogleAdress } from '../hooks/useGoogleAdress';
import '../Styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  let location;
  //let location= useGoogleAdress(buyer[0].address)

  

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Te estaremos avisando el estado de tu pedido</span>
        <div className="Success-map">
          {/* <Map location={location} /> */}
        </div>
      </div>
    </div>
  );
};

export { Success };
