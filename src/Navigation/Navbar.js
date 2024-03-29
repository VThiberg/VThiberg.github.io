import React from 'react'
import {Navbar, NavDropdown, Form, FormControl, Button, Nav} from 'react-bootstrap';
import { Component } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Math from '../pages/Math';
import Swedish from '../pages/Swedish';
import English from '../pages/English';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand href="#">School-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/Math">Math</Nav.Link>
                            <Nav.Link as={Link} to="/English">English</Nav.Link>
                            <Nav.Link as={Link} to="/Swedish">Swedish</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                
                <Routes>
                    <Route path="Swedish" element={<Swedish />}>
                        
                    </Route>
                    <Route path="/English" element={<English />}>
                        
                    </Route>
                    <Route path="/Math" element={<Math />}>
                        
                    </Route>
                </Routes>
          
            </div>
        </Router>
        )
    }
}
