import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const base = import.meta.env.BASE_URL;

const NavBar: React.FC = () => {
    console.log(base);
    console.log(window.location.pathname);
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="sm">
            <Container>
                <Navbar.Brand href="/">Degazification</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="text-to-image" active={window.location.pathname.endsWith("text-to-image")}>
                            Text2Img
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
