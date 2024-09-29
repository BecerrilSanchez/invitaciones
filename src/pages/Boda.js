import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

function Boda({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      return (
          <Container className="mt-5">
            <h1 className="mb-4">Nuestros Servicios</h1>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Desarrollo Web</Accordion.Header>
                <Accordion.Body>
                  Ofrecemos soluciones de desarrollo web personalizadas utilizando las
                  últimas tecnologías para crear sitios web rápidos, seguros y
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
