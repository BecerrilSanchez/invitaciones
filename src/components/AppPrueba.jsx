import React, { useContext, useEffect, useState } from 'react';
import { useApiKey } from '../context/ApiKeyContext';
import { UserContext } from '../context/UserContext';

const AppPrueba = ({ signOut, user }) => {
  const apiKey = useApiKey();
  const { setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Maneja la información del usuario logeado
  useEffect(() => { 
    const storeUserData = async () => {
      if (!user || !user.signInDetails?.loginId) {
        console.error("Información del usuario no disponible o incompleta.");
        return;
      }

      setUser(user); // Almacena el usuario en el contexto
      sessionStorage.setItem("user", JSON.stringify(user));
      console.log("Usuario guardado en el contexto y sessionStorage desde AppPrueba:", user);

      // Realiza la consulta a la API
      try {
        const fetchedUserData = await fetchUserData(user.signInDetails.loginId);
        if (fetchedUserData) {
          setUserData(fetchedUserData);
          setUser((prevUser) => ({
            ...prevUser,
            apiId: fetchedUserData.id,
          }));
          sessionStorage.setItem("apiId", fetchedUserData.id);
          console.log("Datos del usuario logeado obtenidos y almacenados.");
        }
      } catch (error) {
        console.error("Error al realizar la consulta de usuarios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    storeUserData();
  }, [user, setUser]);

  //Trae la información del usuario que haga match con el correo logeado
  const fetchUserData = async (loginId) => {
    try {
      const response = await fetch(
        "https://gyela7sxvfg7hofofnpumj74ti.appsync-api.us-west-2.amazonaws.com/graphql",
        {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `query { listUsers { items { gmailUsuario nombreUsuario movilUsuario id } } }`,
          }),
        }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      if (result.errors) throw new Error(`Errores en la respuesta de GraphQL: ${result.errors}`);

      const users = result.data.listUsers.items;
      return users.find((u) => u.gmailUsuario === loginId);
    } catch (error) {
      console.error("Error en fetchUserData:", error);
      return null;
    }
  };

  if (isLoading) {
    return <p>Cargandooooo datos del usuario...</p>;
  }
  console.log("----->"+JSON.stringify(userData));
  return (
    <div>
      <p>La API Key es: {apiKey}</p>
      <p>Usuario: {user.username}</p>
      <p>Email: {user.signInDetails?.loginId}</p>
      <p>Nombre desde API: {userData?.nombreUsuario}</p>
      <p>Móvil desde API: {userData?.movilUsuario}</p>
      <p>Id desde API: {userData?.id}</p>
      <button onClick={signOut}>Cerrar sesión</button>
    </div>
  );
};

export default AppPrueba;
