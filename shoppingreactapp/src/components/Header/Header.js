import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, FormControl, Dropdown, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar className="bg-dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Card</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}> Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
