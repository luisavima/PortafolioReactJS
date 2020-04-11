import React from "react";
import Description from "../components/description";

import Education from "../components/education";
import Experience from "./experience";
import Skills from "./skills";
import Portafolio from "./portfolio";
import Contacto from "./contact";
import Footer from "./footer";

class Informacion extends React.Component {
  render() {
    return (
      <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 color-principal">
        <Description />
        <Education />
        <Experience />
        <Skills />
        <Portafolio />
        <Contacto />
        <Footer />
      </div>
    );
  }
}

export default Informacion;
