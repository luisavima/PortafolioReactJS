import React from "react";

function listaEducacion(props) {
  const datos = props.education;
  // lo que recibe para procesar, pintar y devolver

  return datos.map((educacion) => {
    return (
      <div
        key={educacion.id}
        className="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-white"
      >
        <h4 className="text-student">{educacion.titulo}</h4>
        <p>
          {educacion.institucion}
          <br />
          {educacion.año}
        </p>
      </div>
    );
  });
}

export default listaEducacion;
