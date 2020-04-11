import React from "react";

class itemsMenu extends React.Component {
  // lo que recibe para procesar, pintar y devolver
  render() {
    return (
      <div>
        {this.props.opciones.map((opcion) => {
          return (
            <a
              key={opcion.id}
              className="nav-item nav-link option menu-icono font-weight-bold"
              href={opcion.destino}
            >
              <i className={opcion.nombreIcono}></i>
              {opcion.texto}
            </a>
          );
        })}
      </div>
    );
  }
}

export default itemsMenu;
