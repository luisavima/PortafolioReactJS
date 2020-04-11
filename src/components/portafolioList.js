import React from "react";

function listaDeProyectos(props) {
  const datos = props.proyectos;
  // lo que recibe para procesar, pintar y devolver

  return datos.map((proyectos) => {
    return (
      <div key={proyectos.id} className="col-sm-4 col-md-4 col-lg-4">
        <br />
        <h4 className="project-tile">{proyectos.nombre}</h4>
        <a href={proyectos.link} target="_blank">
          <img src={proyectos.imagen} className="img_presentation" />
        </a>
      </div>
    );
  });
}

export default listaDeProyectos;
