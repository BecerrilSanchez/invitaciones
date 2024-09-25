import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* Hero section (antes Jumbotron) */}
      <div className="bg-light text-dark p-5">
        <Container>
          <h1>Bienvenido a Mi Sitio</h1>
          <p>
            Este es el mejor lugar para encontrar soluciones personalizadas para
            tus necesidades.
          </p>
          <Button variant="primary" href="#features">
            Ver más
          </Button>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <Container>
          <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;
