import React, { useContext, useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { UserContext } from "../context/UserContext"; // Importa el contexto de usuario
import { ApiContext } from "../context/ApiKeyContext"; // Importa el contexto

Amplify.configure(config);

function Boda({ signOut, user }) {
  const { setUser } = useContext(UserContext); // Contexto de usuario para almacenar la información del usuario
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario obtenido de la API
  const { apiKey } = useContext(ApiContext);

  useEffect(() => {
    if (user && apikey) {
      setUser(user); // Guarda la información básica del usuario en el contexto de UserContext
      sessionStorage.setItem("user", JSON.stringify(user)); // Guarda el usuario en sessionStorage
      console.log(
        "Usuario guardado en contexto y sessionStorage desde /boda:",
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
                  "x-api-key": apiKey, // API Key proporcionada en el curl
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
      console.log("Usuario no disponible en /boda");
    }
  }, [user, setUser]);

  if (!userData) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
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
      return (
      <Container className="mt-5">
        <h1 className="mb-4">Nuestros Servicios</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Desarrollo Web</Accordion.Header>
            <Accordion.Body>
              Ofrecemos soluciones de desarrollo web personalizadas utilizando
              las últimas tecnologías para crear sitios web rápidos, seguros y
              eficientes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Aplicaciones Móviles</Accordion.Header>
            <Accordion.Body>
              Desarrollamos aplicaciones móviles nativas y multiplataforma que
              funcionan perfectamente en dispositivos iOS y Android.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Consultoría en la Nube</Accordion.Header>
            <Accordion.Body>
              Ayudamos a tu empresa a migrar, administrar y optimizar soluciones
              en la nube, con un enfoque en AWS, Azure, y Google Cloud.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Marketing Digital</Accordion.Header>
            <Accordion.Body>
              Creamos estrategias de marketing digital para mejorar la presencia
              de tu marca en línea, aumentar el tráfico y convertir leads en
              clientes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      );
    </>
  );
}

export default withAuthenticator(Boda);
