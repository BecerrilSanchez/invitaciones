import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const UserForm = ({ onUserSubmit }) => {
  const [userData, setUserData] = useState({
    nombreUsuario: '',
    gmailUsuario: '',
    movilUsuario: '',
    formatoInvitacion: '',
    notaEnvio: '',
    fechaEnvio: '',
    horaEnvio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(userData); // Pasamos los datos al componente padre o al siguiente paso
  };

  return (
    <div className='container' styles="margin:32px 0 0 0;">
        <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNombreUsuario">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            name="nombreUsuario"
            value={userData.nombreUsuario}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGmailUsuario">
          <Form.Label>Gmail de Usuario</Form.Label>
          <Form.Control
            type="email"
            name="gmailUsuario"
            value={userData.gmailUsuario}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formMovilUsuario">
          <Form.Label>Móvil de Usuario</Form.Label>
          <Form.Control
            type="text"
            name="movilUsuario"
            value={userData.movilUsuario}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFormatoInvitacion">
          <Form.Label>Formato de Invitación</Form.Label>
          <Form.Control
            type="text"
            name="formatoInvitacion"
            value={userData.formatoInvitacion}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formNotaEnvio">
        <Form.Label>Nota de Envío</Form.Label>
        <Form.Control
          as="textarea"
          name="notaEnvio"
          rows={3}
          value={userData.notaEnvio}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFechaEnvio">
          <Form.Label>Fecha de Envío</Form.Label>
          <Form.Control
            type="date"
            name="fechaEnvio"
            value={userData.fechaEnvio}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formHoraEnvio">
          <Form.Label>Hora de Envío</Form.Label>
          <Form.Control
            type="time"
            name="horaEnvio"
            value={userData.horaEnvio}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Siguiente
      </Button>
        </Form>
    </div>
    
  );
};

export default UserForm;
