import React from "react";

function listaHabilidades(props) {
  const datos = props.habilidad;
  // lo que recibe para procesar, pintar y devolver

  return datos.map((habilidad) => {
    return (
      <div key={habilidad.id} className="col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
        <br />
        <h4 className="text-student">{habilidad.habilidad}</h4>
        <img src={habilidad.icon} />
      </div>
    );
  });
}

export default listaHabilidades;
