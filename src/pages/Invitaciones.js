import React, { useContext, useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { UserContext } from "../context/UserContext"; // Importa el contexto de usuario
import { ApiKeyProvider } from "../context/ApiKeyContext";
import AppPrueba from "../components/AppPrueba";
Amplify.configure(config);

function Invitaciones({ signOut, user }) {
  const { setUser } = useContext(UserContext); // Contexto de usuario para almacenar la información del usuario
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario obtenido de la API

  useEffect(() => {
    if (user) {
      setUser(user); // Guarda la información básica del usuario en el contexto de UserContext
      sessionStorage.setItem("user", JSON.stringify(user)); // Guarda el usuario en sessionStorage
      console.log(
        "Usuario guardado en contexto y sessionStorage desde /Invitaciones:",
        user
      );

      // Verificamos que `user.signInDetails.loginId` esté disponible
      if (user.signInDetails && user.signInDetails.loginId) {
        // Realiza la consulta a la API de GraphQL usando fetch
        const fetchUserData = async () => {
          try {
            const response = await fetch(
              "https://gyela7sxvfg7hofofnpumj74ti.appsync-api.us-west-2.amazonaws.com/graphql",
              {
                method: "POST",
                headers: {
                  "x-api-key": "da2-23mazg5i2bhfvl7zb4ka7au6eu", // API Key proporcionada en el curl
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  query: `query { listUsers { items { gmailUsuario nombreUsuario movilUsuario id } } }`,
                }),
              }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.errors) {
              console.error(
                "Errores en la respuesta de GraphQL:",
                result.errors
              );
              return;
            }

            const users = result.data.listUsers.items;

            // Filtra el usuario basado en el gmail del usuario autenticado
            const loggedInUser = users.find(
              (u) => u.gmailUsuario === user.signInDetails.loginId
            );

            if (loggedInUser) {
              setUserData(loggedInUser); // Guarda los datos del usuario encontrado

              // Almacena el id proveniente de la API como un campo independiente en el UserContext
              setUser((prevUser) => ({
                ...prevUser,
                apiId: loggedInUser.id, // Guarda el id de la API como un campo independiente
              }));

              // Almacena el id en sessionStorage
              sessionStorage.setItem("apiId", loggedInUser.id); // Guarda el id de la API en sessionStorage

              console.log(
                `ID del usuario desde la API encontrado: ${loggedInUser.id}`
              );
            } else {
              console.error(
                "No se encontró el usuario con el correo electrónico proporcionado."
              );
            }
          } catch (error) {
            console.error("Error al realizar la consulta de usuarios:", error);
          }
        };

        fetchUserData(); // Ejecuta la consulta
      } else {
        console.error(
          "No se puede acceder al email del usuario. El objeto `user.signInDetails.loginId` no existe."
        );
      }
    } else {
      console.log("Usuario no disponible en /Invitaciones");
    }
  }, [user, setUser]);

  if (!userData) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <ApiKeyProvider>
      <>
        <h1>Hello {user.username}</h1>
        <h1>Tu gmail es: {user.signInDetails.loginId}</h1>
        <h2>Datos de la API:</h2>
        <p>Nombre: {userData.nombreUsuario}</p>
        <p>Correo Electrónico: {userData.gmailUsuario}</p>
        <p>Móvil: {userData.movilUsuario}</p>
        <p>ID del Usuario (desde API): {userData.id}</p>{" "}
        {/* Imprime el ID desde la API */}
        <button onClick={signOut}>Sign out</button>
      </>
      <AppPrueba userId={userData.id} />
    </ApiKeyProvider>
  );
}

export default withAuthenticator(Invitaciones);
