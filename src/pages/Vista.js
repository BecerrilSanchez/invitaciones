import React from "react";
import { useParams } from "react-router-dom";

const Vista = () => {
  const { groupId } = useParams();

  return (
    <div>
      <h1>Detalles del Grupo</h1>
      <p>ID del Grupo: {groupId}</p>
      {/* Aquí puedes agregar lógica para mostrar detalles adicionales del grupo usando el groupId */}
    </div>
  );
};

export default Vista;
