import React from "react";
import "../styles/main.css";
import RedesSociales from "../components/redesSociales";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2 id="contacto" className="title font-weight-bold text-white ">
          Contacto
        </h2>
        <br />
        <div className="row">
          <div className="col-sm col-md col-lg col-xl color-principal ">
            <p className="text-center text-white">
              ¿Estás interesado en contratarme para tu proyecto o solo quieres
              saludar? Puede completar el formulario de contacto a continuación
              o enviarme un correo electrónico a
              <span> lfvilla02@gmail.com </span>
            </p>
            <p className="text-center text-white">
              ¿Quieres conectarte? Sígueme en los canales sociales a
              continuación.
            </p>
            <RedesSociales />
            <hr />
            <div className="row">
              <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 color-principal "></div>

              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 color-principal ">
                <form>
                  <div className="form-row ">
                    <div className="form-group col-md-6 ">
                      <input
                        type="name"
                        className="form-control "
                        placeholder="Nombre "
                      />
                    </div>
                    <div className="form-group col-md-6 ">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Email "
                      />
                    </div>
                    <hr />
                  </div>
                  <div className="form-group ">
                    <textarea
                      className="form-control "
                      id="exampleFormControlTextarea1 "
                      rows="10 "
                      cols="40 "
                      placeholder="Ingrese su mensaje "
                    ></textarea>
                  </div>
                  <button
                    type="button "
                    className="btn btn-secondary btn-lg btn-block boton-formulario"
                  >
                    Enviar ahora
                  </button>
                  <br />
                </form>
                <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 color-principal "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
