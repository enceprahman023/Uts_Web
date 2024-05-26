import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const Navigations = () => {
    function NavScrollExample() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: 'white', paddingRight: '20px', paddingLeft:'50px'}}>MA Darul 'Ulum Nurdiniyyah</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1" style={{ color: 'white', paddingRight: '10px', paddingLeft: '10px' }}>Beranda</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white', paddingRight: '10px', paddingLeft: '10px' }}>Profil</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingRight: '10px', paddingLeft: '10px' }}>Kegiatan</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingRight: '10px', paddingLeft: '10px' }}>Ekstrakurikuler</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingRight: '10px', paddingLeft: '10px' }}>Contact</Nav.Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="primary" style={{ color: 'white' }}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <div>
            <NavScrollExample />
        </div>
    );
}

export default Navigations;
