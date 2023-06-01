import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link} from "react-router-dom";

export default function NavBar() {
  const menuItems = ["Hoodies", "Remeras", "Gorras"];

  return (
    <div className="navbar-main">
    <Link to="/">
        <img src={logo} alt="a" width="102" height="82" />
    </Link>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            {menuItems.map(cat => <Link key={cat} to={`/category/${cat}`}><button className="navbar-item">{cat}</button></Link>)}
          </Nav>
        </Navbar.Collapse>
        <Link to={'/cart'}>
          <Button variant="outline-success">
            <CartWidget />
          </Button>
        </Link>
      </Container>
    </Navbar>
    </div>
  );
}