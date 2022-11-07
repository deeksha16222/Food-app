import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge badgeContent={4} color="primary">
          <i
            class="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
          </Badge>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
