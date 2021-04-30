import React from 'react'
import {  Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
import { Container, Row, Col } from 'react-bootstrap'



function Header() {
    return (
        <div>

            <Container>
                <Row>
                    <Col className="m-0 p-0">
                        <div className="header-label mt-3 mb-0 pb-0">

                            <div className="all-buttons">
                                <ul className="d-flex w-100">
                                    <li>
                                        <Link to="/atcmenu" className="btn btn-1" >ATC</Link>
                                    </li>
                                    <li>
                                        <Link to="/flightinfo" className="btn btn-1" >Flight Information</Link>
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
                                        <Link to="/reviewmenu" className="btn btn-1">Review</Link>
                                    </li>
                                    <li>
                                        <Link to="/mangermenu" className="btn btn-1">Manager</Link>
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

