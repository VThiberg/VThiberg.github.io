import React from 'react'
import {Navbar, NavDropdown, Form, FormControl, Button, Nav} from 'react-bootstrap';
import { Component } from 'react';

import { Link } from "react-router-dom";



export default class NavbarComp extends Component {
    render() {
        return (
            
            <Navbar bg="dark" variant={"dark"} >
                <Navbar.Brand as={Link} to="/Home">School-App</Navbar.Brand>
                
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/Math">Math</Nav.Link>
                        <Nav.Link as={Link} to="/English">English</Nav.Link>
                        <Nav.Link as={Link} to="/Swedish">Swedish</Nav.Link>

                    </Nav>

                
            </Navbar>
        )
    }
}
