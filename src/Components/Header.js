import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Navbar, Nav } from 'react-bootstrap';

import Translations from '../pages/Traslantions';
import AddTranslation from '../pages/AddTranslation';

function Header() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparant" expand="lg">
          <Navbar.Brand>Arabisch Leren App</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/add-translation">Add Translation</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/" exact>
            <Translations />
          </Route>
          <Route path="/add-translation">
            <AddTranslation />
          </Route>
        </Switch>      
      </Container>
    </Router>
  );
}


export default Header;