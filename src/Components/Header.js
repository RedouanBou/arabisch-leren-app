import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Navbar, Nav } from 'react-bootstrap';

import Translations from '../pages/Traslantions';
import AddTranslation from '../pages/AddTranslation';

function Header() {
  return (
    <Router>
        <Navbar className="border-bottom" bg="transparant" expand="lg">
          <Container className="p-0">
            <Navbar.Brand>Arabisch Leren App</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/arabisch-leren-app/">Home</Link>
                <Link className="nav-link" to="/arabisch-leren-app/add-translation">Add Translation</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/arabisch-leren-app/" exact>
            <Translations />
          </Route>
          <Route path="/arabisch-leren-app/add-translation">
            <AddTranslation />
          </Route>
        </Switch>      
    </Router>
  );
}


export default Header;