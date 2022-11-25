import React from "react";
import PropTypes from "prop-types";
import "./../assets/css/header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col lg={3}>Logo</Col>
                    <Col lg={6} className="header-nav">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/doctor"}>Doctor</Link>
                        <Link to={"/patient"}>Patient</Link>
                        <Link to={"/user-profile"}>User Profile</Link>
                    </Col>
                    <Col lg={3}>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

Header.propTypes = {};

export default Header;
