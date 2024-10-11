import React, { useEffect, useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import "./components.css";

const UserForm = ({ email }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ nombreUsuario: '', movilUsuario: '' });

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
        const filteredUsers = result.data.listUsers.items.filter(user => user.gmailUsuario === email);
        setUsers(filteredUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [email]);

  const handleEditClick = (user) => {
    setFormData({
      nombreUsuario: user.nombreUsuario,
      movilUsuario: user.movilUsuario,
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAcceptClick = () => {
    // Actualizar los datos con la nueva información ingresada
    const updatedUsers = users.map(user => ({
      ...user,
      nombreUsuario: formData.nombreUsuario,
      movilUsuario: formData.movilUsuario,
    }));
    setUsers(updatedUsers);
    setIsEditing(false);
  };

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  return (
    <div className="container mt-32">
      <h2>Información de usuario</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Móvil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.nombreUsuario}</td>
                <td>{user.gmailUsuario}</td>
                <td>{user.movilUsuario}</td>
                <td>
                  <Button onClick={() => handleEditClick(user)}>Editar</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontró ningún usuario con ese correo.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Mostrar el formulario de edición si isEditing es verdadero */}
      {isEditing && (
        <div className="edit-form">
          <h3>Editar Usuario</h3>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombreUsuario"
                value={formData.nombreUsuario}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formMovil">
              <Form.Label>Móvil</Form.Label>
              <Form.Control
                type="text"
                name="movilUsuario"
                value={formData.movilUsuario}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email (No editable)</Form.Label>
              <Form.Control
                type="email"
                value={email}
                disabled
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAcceptClick}>
              Aceptar
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
