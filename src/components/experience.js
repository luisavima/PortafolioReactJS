import React from "react";
import "../styles/main.css";
import ExperienceList from "../components/experienceList";

class Experience extends React.Component {
  listaExperiencia = [
    {
      id: "1",
      cargo: "Analista de base de datos",
      empresa: "Intergrupo",
      duracion: "Enero 2019 - Octubre 2019",
    },
    {
      id: "2",
      cargo: "Asesor de soporte N1",
      empresa: "ARUS",
      duracion: "Octubre 2017 - Enero 2019",
    },
    {
      id: "3",
      cargo: "Asesor de soporte técnico",
      empresa: "Emtelco",
      duracion: "Junio 2017 - Octubre 2017",
    },
    {
      id: "4",
      cargo: "Auxiliar de sistemas",
      empresa: "Hogar y moda",
      duracion: "Agosto 2015 - Enero 2017",
    },
  ];

  render() {
    return (
      <div>
        <hr />
        <h2 id="experiencia" className="title font-weight-bold text-white">
          Experiencias
        </h2>
        <br />
        <div className="row container-background">
          <ExperienceList experience={this.listaExperiencia} />
        </div>
      </div>
    );
  }
}

export default Experience;
