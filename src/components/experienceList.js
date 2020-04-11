import React from "react";

function listaExperiencia(props) {
  const datos = props.experience;
  // lo que recibe para procesar, pintar y devolver

  return datos.map((experiencia) => {
    return (
      <div
        key={experiencia.id}
        className="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center text-white"
      >
        <br />
        <h4 className="text-experience">{experiencia.cargo}</h4>
        <p>
          {experiencia.empresa}
          <br /> {experiencia.duracion}
        </p>
      </div>
    );
  });
}

export default listaExperiencia;
