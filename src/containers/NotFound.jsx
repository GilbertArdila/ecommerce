import React from 'react';
import { Helmet } from 'react-helmet';
import '../Styles/components/NotFound.css';

const NotFound = () => {
  return (
    <>
    <Helmet><title>Free-trade store-NotFound</title></Helmet>
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Parece que tenemos problemas</h3>

                <p>La página que buscas no está disponible o no existe!</p>

                <a href="'/" className="link_404">
                  Regresar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export { NotFound };
