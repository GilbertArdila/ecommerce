import React, { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2';
import { regex_email, regex_phone, regex_name } from '../helpers/Regexp';
import { handleTotalAmount } from '../helpers/handleTotalAmount';
import '../Styles/components/Information.css';
const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const history = useHistory();

  

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    if (!regex_name.test(formData.get('name').trim())) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor ingresa nombre y apellido separados por un espacio',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else if (!regex_email.test(formData.get('email').trim())) {
      Swal.fire({
        title: 'Error!',
        text: 'Dirección de correo invalida, verificala por favor',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else if (!regex_phone.test(formData.get('phone').trim())) {
      Swal.fire({
        title: 'Error!',
        text: 'El número teléfonico debe tener 10  dígitos sin espacios ni caracteres especiales',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else if (
      formData.get('address') === '' ||
      formData.get('apto') === '' ||
      formData.get('city') === '' ||
      formData.get('state') === '' ||
      formData.get('cp') === ''
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Verifica que todos los campos estén diligenciados',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else {
      const buyer = {
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        apto: formData.get('apto'),
        city: formData.get('city'),
        state: formData.get('state'),
        cp: formData.get('cp'),
        phone: formData.get('phone'),
      };
      addToBuyer(buyer);
      history.push('/checkout/payment');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free-trade store-information</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" name="name" placeholder="Nombre completo" />
              <input
                type="text"
                name="email"
                placeholder="Correo electronico"
              />
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
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>

        <div className="Information-sidebar">
          <h3>Pedido</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
          <span>total:${handleTotalAmount()}</span>
        </div>
      </div>
    </>
  );
};

export { Information };
