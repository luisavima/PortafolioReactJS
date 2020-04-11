import React from "react";
import "../styles/main.css";

class RedesSociales extends React.Component {
  render() {
    return (
      <div className="icons text-center">
        <a href="https://twitter.com/luisafer0228" target="_blank">
          <i className="icono fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luisa-fernanda-villa-macias-63a828172/"
          target="_blank"
        >
          <i className="icono fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/luisavima" target="_blank">
          <i className="icono fab fa-github"></i>
        </a>
        <a href="#contacto">
          <i className="icono fas fa-envelope"></i>
        </a>
      </div>
    );
  }
}

export default RedesSociales;
