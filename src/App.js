import React, { useEffect, useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import General from "./pages/General";
import Invitaciones from "./pages/Invitaciones";
import PruebaAuth from "./pages/PruebaAuth";
import Form from "./pages/Formulario";
import UserForm from "./pages/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";
import { Amplify } from "aws-amplify";
import { UserContext } from "./context/UserContext"; // Importa el contexto de usuario
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/userInfo",
    element: <UserForm />,
  },
  {
    path: "/general",
    element: <General />,
  },
  {
    path: "/misinvitaciones",
    element: <Invitaciones />,
  },
  {
    path: "/prueba",
    element: <PruebaAuth />,
  },
]);

function App() {
  const { user, setUser } = useContext(UserContext); // Accede a la información del usuario

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedApiId = sessionStorage.getItem("apiId"); // Recupera el apiId desde sessionStorage

    if (!user && storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (storedApiId) {
        parsedUser.apiId = storedApiId; // Añade el apiId al objeto user si está disponible
      }
      setUser(parsedUser); // Restaura el usuario desde sessionStorage si no está en el contexto
    }

    if (user) {
      console.log("Usuario en App.js:", user); // Imprime la información del usuario, incluyendo apiId si está presente
    } else {
      console.log("No hay usuario disponible en el contexto.");
    }
  }, [user, setUser]);

  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Mi Sitio Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/misinvitaciones">Mis invitaciones</Nav.Link>
            </Nav>

            <Dropdown align="end">
              <Dropdown.Toggle
                as="a"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Gear size={24} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/userInfo">Usuario</Dropdown.Item>
                <Dropdown.Item href="/general">Configuración</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
