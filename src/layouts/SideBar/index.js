
import { useState } from "react";
import "./sidebar.css"
import { Container, Row, Col,Navbar ,Nav, NavDropdown,
    //Offcanvas,ListGroup 
} from "react-bootstrap";
import {Outlet} from "react-router-dom";

function Sidebar(){
    const [show,setShow] = useState(true);
    return (
        <Container fluid>
            <Row>
                <Col sm="1" hidden={show} bg="primary" className="sideBar">
                    <div>
                        User
                    </div>
                    <div>
                        User
                    </div>
                </Col>
                <Col>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                    <button onClick={()=>setShow(!show)}>click</button>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar;