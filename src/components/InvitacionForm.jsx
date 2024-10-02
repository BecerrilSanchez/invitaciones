import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const InvitacionForm = ({ userData }) => {
  const [invitacionData, setInvitacionData] = useState({
    numInvitacionesOfrecidas: 0,
    numInvitacionesConfirmadas: 0,
    invitacionFamiliar: false,
    grupo: {
      nombreFamilia: '',
      invitados: [
        {
          nombreInvitado: '',
          apellidoPaInv: '',
          apellidoMaInv: '',
          movilInvitado: '',
          emailInvitado: ''
        }
      ]
    },
    evento: [
      {
        nombreEvento: '',
        lugares: [
          {
            tipo: '',
            fecha: '',
            hora: '',
            urlUbicacion: ''
          }
        ]
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInvitacionData({
      ...invitacionData,
      [name]: inputValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userData, invitacionData }); // Aquí puedes procesar los datos juntos o enviarlos a la API
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Datos de la Invitación</h3>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNumInvitacionesOfrecidas">
          <Form.Label>Número de Invitaciones Ofrecidas</Form.Label>
          <Form.Control
            type="number"
            name="numInvitacionesOfrecidas"
            value={invitacionData.numInvitacionesOfrecidas}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formNumInvitacionesConfirmadas">
          <Form.Label>Número de Invitaciones Confirmadas</Form.Label>
          <Form.Control
            type="number"
            name="numInvitacionesConfirmadas"
            value={invitacionData.numInvitacionesConfirmadas}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="formInvitacionFamiliar" className="mb-3">
        <Form.Check
          type="checkbox"
          label="¿Invitación Familiar?"
          name="invitacionFamiliar"
          checked={invitacionData.invitacionFamiliar}
          onChange={handleChange}
        />
      </Form.Group>

      <h4>Datos del Grupo</h4>
      <Form.Group className="mb-3" controlId="formNombreFamilia">
        <Form.Label>Nombre de la Familia</Form.Label>
        <Form.Control
          type="text"
          name="nombreFamilia"
          value={invitacionData.grupo.nombreFamilia}
          onChange={handleChange}
        />
      </Form.Group>

      <h4>Datos de los Invitados</h4>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNombreInvitado">
          <Form.Label>Nombre del Invitado</Form.Label>
          <Form.Control
            type="text"
            name="nombreInvitado"
            value={invitacionData.grupo.invitados[0].nombreInvitado}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formApellidoPaInv">
          <Form.Label>Apellido Paterno</Form.Label>
          <Form.Control
            type="text"
            name="apellidoPaInv"
            value={invitacionData.grupo.invitados[0].apellidoPaInv}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formApellidoMaInv">
          <Form.Label>Apellido Materno</Form.Label>
          <Form.Control
            type="text"
            name="apellidoMaInv"
            value={invitacionData.grupo.invitados[0].apellidoMaInv}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <h4>Datos del Evento</h4>
      <Form.Group className="mb-3" controlId="formNombreEvento">
        <Form.Label>Nombre del Evento</Form.Label>
        <Form.Control
          type="text"
          name="nombreEvento"
          value={invitacionData.evento[0].nombreEvento}
          onChange={handleChange}
        />
      </Form.Group>

      <h4>Datos de los Lugares</h4>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTipoLugar">
          <Form.Label>Tipo de Lugar</Form.Label>
          <Form.Control
            type="text"
            name="tipo"
            value={invitacionData.evento[0].lugares[0].tipo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFechaLugar">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            value={invitacionData.evento[0].lugares[0].fecha}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formHoraLugar">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            name="hora"
            value={invitacionData.evento[0].lugares[0].hora}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formUrlUbicacion">
        <Form.Label>URL de Ubicación</Form.Label>
        <Form.Control
          type="text"
          name="urlUbicacion"
          value={invitacionData.evento[0].lugares[0].urlUbicacion}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar Invitación
      </Button>
    </Form>
  );
};

export default InvitacionForm;
