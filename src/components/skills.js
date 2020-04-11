import React from "react";
import "../styles/main.css";
import SkillList from "../components/skillList";

class Skill extends React.Component {
  listaHabilidades = [
    {
      id: "1",
      habilidad: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      id: "2",
      habilidad: "CSS",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      id: "3",
      habilidad: "JavaScrip",
      icon: "https://img.icons8.com/color/48/000000/javascript.png ",
    },
    {
      id: "4",
      habilidad: "React",
      icon: "https://img.icons8.com/ultraviolet/48/000000/react.png",
    },
    {
      id: "5",
      habilidad: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      id: "6",
      habilidad: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      id: "7",
      habilidad: "C#",
      icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    },
    {
      id: "8",
      habilidad: "SQL",
      icon: "https://img.icons8.com/office/48/000000/database-export.png",
    },
  ];

  render() {
    return (
      <div>
        <hr />
        <h2 id="habilidad" className="title font-weight-bold text-white">
          Habilidades
        </h2>
        <br />
        <div className="row text-white container-background text-center">
          <SkillList habilidad={this.listaHabilidades} />
          <br />
        </div>
      </div>
    );
  }
}

export default Skill;
