import React from 'react'
import {  Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap'



function Header() {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <div className="header-label mt-3 mb-0 pb-0">

                            <div className="all-buttons">
                                <ul className="d-flex w-100">
                                    <li>
                                        <Link to="" className="btn btn-1" style={{background:'transparent'}}>ATC</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="btn btn-1" style={{background:'transparent'}}>Flight Information</Link>
                                    </li>
                                    <li>
                                        <Link to="/company" className="btn btn-1" style={{background:'#77DF8C',color:'#fff'}}>Company</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    
                        {/* below line */}

                        <div className="header-label mt-0 pt-0">

                            <div className="all-buttons">
                                <ul className="d-flex w-100">
                                    <li>
                                        <Link href="" className="btn btn-1">Review</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="btn btn-1">Manager</Link>
                                    </li>
                                    <li>
                                        <Link to="/message" className="btn btn-1">New Messages</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    
                    
                    
                    
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Header;

