import { Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "}
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            {" "}
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            {" "}
            Store
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position:"relative" }}
          className="rounded-circle"
          variant="outline-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
          <div
            className="rounded-circle flex justify-content-center align-items-center bg-danger"
            style={{ width: "1.5rem" , height: "1.5rem", position:"absolute", color:"white" , bottom: "0" , right: "0" , transform: "translate(25%, 25%)"}}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
