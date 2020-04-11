import React from "react";
import Navbar from "./components/Navbar";
import Informacion from "./components/Informacion";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Informacion />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
