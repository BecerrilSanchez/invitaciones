import React from "react";
import "../css/header.css";
let vacio =
  "https://www.youtube.com/watch?v=AaWCX4XIcnw&list=RD8OalWvMJlkc&index=12";
const HeaderPrincipal = () => {
  return (
    <div className="menu">
      <div>
        {/* <button
          onClick={abrir_cerrar_menu}
          className="boton_menu"
          id="boton_menu"
        ></button> */}
      </div>
      <nav id="menu_container" className="menu_container">
        <ul>
          <li>
            <a href={vacio}>Regresar</a>
          </li>
          <li>
            <a href={vacio}>Siguiente</a>
          </li>
          <li>
            <a href={vacio}>zzz</a>
          </li>
          <li>
            <a href={vacio}>yyy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderPrincipal;
