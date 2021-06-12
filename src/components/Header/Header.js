import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LinkContainer } from 'react-router-bootstrap';
import Logout from './Logout';
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
  const currentUser = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  if (currentUser.currentUser) {
    return (
      <Navbar className="reactstrap-header" bg="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Cryptotracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="reactstrap-header-right">
            <LinkContainer to="/update-profile">
              <Nav.Link>Update profile</Nav.Link>
            </LinkContainer>
            <Logout />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="reactstrap-header" bg="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Cryptotracker</Navbar.Brand>
        </LinkContainer>
      </Navbar>
    );
  }
};

export default Header;
