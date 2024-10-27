import React, { useContext, useEffect, useState } from 'react';
import { useApiKey } from '../context/ApiKeyContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const AppPrueba = ({ userId }) => {
  const apiKey = useApiKey();
  const { setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Función para obtener los datos del usuario desde la API
  const fetchUserData = async () => {
    const query = `
      query TraeInvitaciones {
        getUser(id: "${userId}") {
          gmailUsuario
          id
          invitaciones {
            items {
              id
              invitacionFamiliar
              grupo {
                id
                nombreFamilia
              }
            }
          }
          nombreUsuario
        }
      }
    `;

    try {
      const response = await fetch('https://gyela7sxvfg7hofofnpumj74ti.appsync-api.us-west-2.amazonaws.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      setUserData(result.data.getUser);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUserData();
    }
  }, [userData]);

  // Función para redirigir a la vista del grupo
  const handleRedirect = (groupId) => {
    navigate(`/grupo/${groupId}`);
  };

  return (
    <div>
      <h1>Bienvenido, {userData?.nombreUsuario}</h1>
      <p>Email: {userData?.gmailUsuario}</p>
      {isLoading ? (
        <p>Cargando datos de invitaciones...</p>
      ) : (
        userData && userData.invitaciones && (
          <table>
            <thead>
              <tr>
                <th>Nombre Familia</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {userData.invitaciones.items.map((invitacion) => (
                <tr key={invitacion.grupo.id}>
                  <td>{invitacion.grupo.nombreFamilia}</td>
                  <td>
                    <button onClick={() => handleRedirect(invitacion.grupo.id)}>
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default AppPrueba;