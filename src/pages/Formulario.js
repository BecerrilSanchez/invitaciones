import React, { useState } from "react";
import UserForm from "../components/UserForm";
import InvitacionForm from "../components/InvitacionForm";

const Formulario = () => {
  const [userData, setUserData] = useState(null);

  const handleUserSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      {!userData ? (
        <UserForm onUserSubmit={handleUserSubmit} />
      ) : (
        <InvitacionForm userData={userData} />
      )}
    </div>
  );
};

export default Formulario;
