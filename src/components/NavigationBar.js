import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'


const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Software Marketplace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            {/* Add more Nav.Link or other components as needed */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart />
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar