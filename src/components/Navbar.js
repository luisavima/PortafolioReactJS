import React from "react";
import fotoPerfil from "../img/foto.png";
import RedesSociales from "../components/redesSociales";
import ItemsMenu from "../components/itemsMenu";

class Navbar extends React.Component {
  opcionesMenu = [
    {
      id: "1",
      nombreIcono: "fas fa-user",
      texto: " Acerca de mi",
      destino: "#acercaDeMi",
    },
    {
      id: "2",
      nombreIcono: "fas fa-graduation-cap",
      texto: " Estudios",
      destino: "#estudio",
    },
    {
      id: "3",
      nombreIcono: "fas fa-briefcase",
      texto: " Experiencias",
      destino: "#experiencia",
    },
    {
      id: "4",
      nombreIcono: "fas fa-running",
      texto: " Habilidades",
      destino: "#habilidad",
    },
    {
      id: "5",
      nombreIcono: "fas fa-laptop-code",
      texto: " Portafolio",
      destino: "#projects",
    },
    {
      id: "6",
      nombreIcono: "fas fa-envelope-open-text",
      texto: " Contacto",
      destino: "#contacto",
    },
  ];

  render() {
    return (
      <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 color-option">
        <nav
          id="navbar"
          className="sticky-top navbar navbar-expand-lg flex-column navbar-light color-option"
        >
          <br />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav flex-column">
              <img
                src={fotoPerfil}
                className="img-fluid img "
                alt="Responsive image "
              />
              <br />
              <p className="text-center text-white">
                Hola, Soy Luisa Fernanda Villa y soy desarrollada Frontend
                !Bienvenido a mi sitio web personal!
              </p>
              <RedesSociales />
              <hr className="hr-container-principal" />
              <ItemsMenu opciones={this.opcionesMenu} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
