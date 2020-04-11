import React from "react";
import "../styles/main.css";
import EducationList from "../components/educationList";

class Education extends React.Component {
  listaEducacion = [
    {
      id: "1",
      titulo: "Técnica en sistemas",
      institucion: "Servicio Nacional De Aprendizaje SENA",
      año: "Completado - Año 2013",
    },
    {
      id: "2",
      titulo: "Tecnóloga en gestión de redes de datos",
      institucion: "Servicio Nacional De Aprendizaje SENA",
      año: "Completado - Año 2016",
    },
    {
      id: "3",
      titulo: "Tecnóloga en desarrollo de software",
      institucion: "Institución Universitaria Pascual Bravo",
      año: "Actualmente en curso",
    },
    {
      id: "4",
      titulo: "Programación básica",
      institucion: "Platzi",
      año: "Completado - Año 2019",
    },
    {
      id: "5",
      titulo: "Desarrolladora Frontend",
      institucion: "Academia Geek",
      año: "Completado - Año 2020",
    },
    {
      id: "6",
      titulo: "Competencias en habilidades blandas",
      institucion: "Comfama",
      año: "Completado - Año 2020",
    },
  ];

  render() {
    return (
      <div>
        <hr />
        <h2 id="estudio" className="title font-weight-bold text-white">
          Estudios
        </h2>
        <br />
        <div className="row container-background text-center">
          <EducationList education={this.listaEducacion} />
        </div>
      </div>
    );
  }
}

export default Education;
