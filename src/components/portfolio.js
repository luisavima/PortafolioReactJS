import React from "react";
import "../styles/main.css";
import cloneGoogle from "../img/cloneGoogle.png";
import cloneWiki from "../img/cloneWiki.PNG";
import paginaTributo from "../img/tribute.png";
import formulario from "../img/formulario.png";
import paginaPresentacion from "../img/presentacion-kanechom.png";
import documentacionTecnica from "../img/documentacion.png";
import team from "../img/team.PNG";
import redSocial from "../img/red_social.png";
import tienda from "../img/tienda.png";
import juegoLetras from "../img/juegoComparando.png";
import PlatziConf from "../img/PlatziConf.png";
import PortafolioList from "../components/portafolioList";

class Portafolio extends React.Component {
  listaDeProyectos = [
    {
      id: "1",
      nombre: "Clon de Google",
      imagen: cloneGoogle,
      link: "https://luisavima.github.io/CloneGoogle/",
    },
    {
      id: "2",
      nombre: "Clon de Wiki",
      imagen: cloneWiki,
      link: "https://luisavima.github.io/CloneDeWiki/",
    },
    {
      id: "3",
      nombre: "Página tributo",
      imagen: paginaTributo,
      link: "https://luisavima.github.io/PaginaAtributo/tribute.html",
    },
    {
      id: "4",
      nombre: "Formulario",
      imagen: formulario,
      link: "https://luisavima.github.io/Formulario/",
    },
    {
      id: "5",
      nombre: "Página de presentación",
      imagen: paginaPresentacion,
      link: "https://luisavima.github.io/LandingPage//",
    },
    {
      id: "6",
      nombre: "Documentación técnica",
      imagen: documentacionTecnica,
      link: "https://luisavima.github.io/TechnicalDocumentationPage/",
    },
    {
      id: "7",
      nombre: "Team Frontend",
      imagen: team,
      link: "https://dinareales.github.io/front2_TeamFrontend/",
    },
    {
      id: "8",
      nombre: "Red social",
      imagen: redSocial,
      link: "https://luisavima.github.io/RedSociaConBootstrap/",
    },
    {
      id: "9",
      nombre: "Tienda básica",
      imagen: tienda,
      link: "https://luisavima.github.io/TiendaBasica-/",
    },
    {
      id: "10",
      nombre: "Juego Comparando",
      imagen: juegoLetras,
      link: "https://luisavima.github.io/JuegoCompararLetras/reto.html",
    },
    {
      id: "11",
      nombre: "Platzi Conf",
      imagen: PlatziConf,
      link: "https://sharp-panini-f28db4.netlify.com/",
    },
  ];

  render() {
    return (
      <div>
        <hr />
        <h2 id="projects" className="title font-weight-bold text-white ">
          Portafolio
        </h2>
        <div className="row container-background  text-center text-experience">
          <PortafolioList proyectos={this.listaDeProyectos} />
        </div>
      </div>
    );
  }
}

export default Portafolio;
