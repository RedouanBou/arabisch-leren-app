import React from 'react';
import '../App.css';

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer id="mainFooter" className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={6} sd={12}>
                        &copy; Copyright Arabisch Leren App, {new Date().getFullYear()}. Alle Rechten Voorbehouden.                   
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;