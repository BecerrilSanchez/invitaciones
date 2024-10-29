import React, { useContext, useEffect, useState } from 'react';
import { useApiKey } from '../context/ApiKeyContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import DeleteInvitacion from '../apiFunctions/DeleteInvitacion';

const AppPrueba = ({ userId }) => {
  const apiKey = useApiKey();
  const { setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleRows, setVisibleRows] = useState({});
  const navigate = useNavigate();

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
      // Inicializa visibleRows para todas las filas de invitaciones como true
      const initialVisibility = result.data.getUser.invitaciones.items.reduce((acc, invitacion) => {
        acc[invitacion.grupo.id] = true;
        return acc;
      }, {});
      setVisibleRows(initialVisibility);
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

  const handleRedirect = (groupId) => {
    navigate(`/grupo/${groupId}`);
  };

  const handleDelete = (groupId) => {
    setVisibleRows((prev) => ({
      ...prev,
      [groupId]: false,
    }));
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
                visibleRows[invitacion.grupo.id] && ( // Verifica la visibilidad de la fila
                  <tr key={invitacion.grupo.id}>
                    <td>{invitacion.grupo.nombreFamilia}</td>
                    <td>
                      <button onClick={() => handleRedirect(invitacion.grupo.id)}>
                        Ver Detalles
                      </button>
                      <DeleteInvitacion groupId={invitacion.grupo.id} userId={userId} onDelete={() => handleDelete(invitacion.grupo.id)} />
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default AppPrueba;
