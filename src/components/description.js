import React from "react";
import "../styles/main.css";
import LogoDescription from "../img/description.png";

class description extends React.Component {
  render() {
    return (
      <div className="row text-white">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 color-principal">
          <br />
          <br />
          <h2
            id="acercaDeMi"
            className="font-weight-bold text-center text-white"
          >
            Luisa Fernanda Villa Macías
          </h2>
          <br />
          <p className="mensaje-saludo">Desarrolladora Frontend.</p>
          <p className="mensaje-saludo">
            Soy desarrolladora de software con énfasis en desarrollo frontend
            para aplicaciones web. ¿Quiere saber cómo puedo ayudarlo en su
            proyecto? Mira mi portafolio de proyectos en línea.
          </p>
          <br />
          <button
            type="button"
            className="btn btn-secondary button-portafolio font-weight-bold "
          >
            <a className="text-white " href="#projects">
              Ver portafolio
            </a>
          </button>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 color-principal">
          <br />
          <br />
          <img clas="img_frontend" src={LogoDescription} />
        </div>
      </div>
    );
  }
}

export default description;
