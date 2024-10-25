import React, { useContext } from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { ApiKeyProvider } from "../context/ApiKeyContext";
import AppPrueba from "../components/AppPrueba";
Amplify.configure(config);

function Invitaciones({ signOut, user }) {
  return (
    <ApiKeyProvider>
      {" "}
      {/*Comparte la appkey con los componentes anidados */}
      <>
        <h1>Hello {user.username}</h1>
        <h1>Tu gmail es: {user.signInDetails?.loginId}</h1>
        {/* Renderizamos AppPrueba y le pasamos signOut y user */}
        <AppPrueba signOut={signOut} user={user} />
      </>
    </ApiKeyProvider>
  );
}

export default withAuthenticator(Invitaciones);
