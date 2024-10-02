import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Formulario = () => {
  const [userData, setUserData] = useState({
    nombreUsuario: "",
    gmailUsuario: "",
    movilUsuario: "",
    formatoInvitacion: "",
    notaEnvio: "",
    fechaEnvio: "",
    horaEnvio: "",
    invitaciones: [
      {
        numInvitacionesOfrecidas: 0,
        numInvitacionesConfirmadas: 0,
        invitacionFamiliar: false,
        grupo: {
          nombreFamilia: "",
          invitados: [
            {
              nombreInvitado: "",
              apellidoMaInv: "",
              apellidoPaInv: "",
              movilInvitado: "",
              emailInvitado: "",
            },
          ],
        },
        evento: [
          {
            nombreEvento: "",
            lugares: [
              {
                tipo: "",
                fecha: "",
                hora: "",
                urlUbicacion: "",
              },
            ],
          },
        ],
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setUserData({
      ...userData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        {/* Sección Usuario */}
        <h3>Datos del Usuario</h3>
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

        {/* Sección Invitaciones */}
        <h3>Datos de la Invitación</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNumInvitacionesOfrecidas">
            <Form.Label>Número de Invitaciones Ofrecidas</Form.Label>
            <Form.Control
              type="number"
              name="numInvitacionesOfrecidas"
              value={userData.invitaciones[0].numInvitacionesOfrecidas}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formNumInvitacionesConfirmadas">
            <Form.Label>Número de Invitaciones Confirmadas</Form.Label>
            <Form.Control
              type="number"
              name="numInvitacionesConfirmadas"
              value={userData.invitaciones[0].numInvitacionesConfirmadas}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formInvitacionFamiliar" className="mb-3">
          <Form.Check
            type="checkbox"
            label="¿Invitación Familiar?"
            name="invitacionFamiliar"
            checked={userData.invitaciones[0].invitacionFamiliar}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sección Grupo */}
        <h3>Datos del Grupo</h3>
        <Form.Group className="mb-3" controlId="formNombreFamilia">
          <Form.Label>Nombre de la Familia</Form.Label>
          <Form.Control
            type="text"
            name="nombreFamilia"
            value={userData.invitaciones[0].grupo.nombreFamilia}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sección Invitados */}
        <h3>Datos de los Invitados</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNombreInvitado">
            <Form.Label>Nombre del Invitado</Form.Label>
            <Form.Control
              type="text"
              name="nombreInvitado"
              value={userData.invitaciones[0].grupo.invitados[0].nombreInvitado}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formApellidoPaInv">
            <Form.Label>Apellido Paterno del Invitado</Form.Label>
            <Form.Control
              type="text"
              name="apellidoPaInv"
              value={userData.invitaciones[0].grupo.invitados[0].apellidoPaInv}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formApellidoMaInv">
            <Form.Label>Apellido Materno del Invitado</Form.Label>
            <Form.Control
              type="text"
              name="apellidoMaInv"
              value={userData.invitaciones[0].grupo.invitados[0].apellidoMaInv}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMovilInvitado">
            <Form.Label>Móvil del Invitado</Form.Label>
            <Form.Control
              type="text"
              name="movilInvitado"
              value={userData.invitaciones[0].grupo.invitados[0].movilInvitado}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formEmailInvitado">
            <Form.Label>Email del Invitado</Form.Label>
            <Form.Control
              type="email"
              name="emailInvitado"
              value={userData.invitaciones[0].grupo.invitados[0].emailInvitado}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección Evento */}
        <h3>Datos del Evento</h3>
        <Form.Group className="mb-3" controlId="formNombreEvento">
          <Form.Label>Nombre del Evento</Form.Label>
          <Form.Control
            type="text"
            name="nombreEvento"
            value={userData.invitaciones[0].evento[0].nombreEvento}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sección Lugares */}
        <h3>Datos de los Lugares</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formTipoLugar">
            <Form.Label>Tipo de Lugar</Form.Label>
            <Form.Control
              type="text"
              name="tipo"
              value={userData.invitaciones[0].evento[0].lugares[0].tipo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formFechaLugar">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              value={userData.invitaciones[0].evento[0].lugares[0].fecha}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formHoraLugar">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              name="hora"
              value={userData.invitaciones[0].evento[0].lugares[0].hora}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formUrlUbicacion">
          <Form.Label>URL de Ubicación</Form.Label>
          <Form.Control
            type="text"
            name="urlUbicacion"
            value={userData.invitaciones[0].evento[0].lugares[0].urlUbicacion}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Invitación
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
