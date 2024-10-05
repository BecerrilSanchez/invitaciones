// Se enlistan todos los usuarios existentes
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://gyela7sxvfg7hofofnpumj74ti.appsync-api.us-west-2.amazonaws.com/graphql', {
          method: 'POST',
          headers: {
            'x-api-key': 'da2-ejxzdwbrvbf5zfpesay42juw6q',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query { 
                      listUsers { 
                        items { 
                          gmailUsuario 
                          nombreUsuario 
                          movilUsuario 
                        } 
                      } 
                    }`,
          }),
        });

        const result = await response.json();
        setUsers(result.data.listUsers.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Móvil</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.nombreUsuario}</td>
              <td>{user.gmailUsuario}</td>
              <td>{user.movilUsuario}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserForm;
