import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { Amplify } from "aws-amplify";
import InvitacionForm from "../components/InvitacionForm";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
Amplify.configure(config);

function Formulario({ user }) {
  console.log("usuario desde infouser: " + user);
  const gmailUsuarioLog = user.signInDetails.loginId;
  return (
    <div>
      <UserForm email={gmailUsuarioLog} />
    </div>
  );
}

export default withAuthenticator(Formulario);
