import React from "react";
import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { products } from "../data/bucket";

export default function NavBar() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) => {
      resolve(products);
    });
    fetchProducts.then((result) =>{
      const categories = result.map((product) => product.category);
      const categorySet = new Set(categories);
      setMenuItems([...categorySet]);
    });
  }, []);

  

  return (
    <div className="navbar-main">
      <Link to="/">
        <img src={logo} alt="a" width="102" height="82" />
      </Link>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
                {menuItems.map(cat => <Nav.Link><NavLink className="navbar-item" key={cat} to={`/category/${cat}`}>{cat}</NavLink></Nav.Link>)}
            </Nav>
            <Link to={'/cart'}>
              <Button variant="outline-success">
                <CartWidget />
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
