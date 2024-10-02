import React, { useState } from "react";
import UserForm from "../components/UserForm";
import InvitacionForm from "../components/InvitacionForm";

const Formulario = () => {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      {!userData ? <UserForm /> : <InvitacionForm userData={userData} />}
    </div>
  );
};

export default Formulario;
