import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { AppContext } from '../context/AppContext';
import { handleTotalAmount } from '../helpers/handleTotalAmount';

import '../Styles/components/Pyment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: 'sb',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    color: 'gold',
    shape: 'rect',
  };

  const handlePaymentSucces = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free-trade store-payment</title>
      </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <h2>Resumen del pedido</h2>
          {cart.map((item) => (
            <div className="Payment-resume" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
          ))}
          {cart.length > 0 ? (
            <span>total: ${handleTotalAmount()}</span>
          ) : (
            <h2>No hay nada en el carrito aún!</h2>
          )}

          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleTotalAmount()}
              onPaymentStart={() => console.log('payment start')}
              onPaymentSucces={(data) => handlePaymentSucces(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
        <div>
          {buyer.length > 0 && (
            <div className="Payment-buyerInformation">
              <h2>
                {buyer[0].name}{' '}
                {'tu pedido será enviado a la siguiente dirección:'}
              </h2>
              <p>
                {'dirección: '}
                {buyer[0].address}
              </p>
              <p>
                {'datos complementarios: '}
                {buyer[0].apto}
              </p>
              <p>
                {'ciudad: '}
                {buyer[0].city}
              </p>
              <p>
                {'departamento: '}
                {buyer[0].state}
              </p>
              <p>
                {'teléfono: '}
                {buyer[0].phone}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Payment };
