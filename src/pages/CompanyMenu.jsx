import React from 'react'
import Header from './Header'
import {  Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from 'react-bootstrap'



function CompanyMenu() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" style={{border:'1px solid silver',minHeight:'95vh'}}>
                        <Header/>
                        <h4 className="text-center text-white">Company</h4>
                        <Row>

                            {/* Flight Menu */}

                            <Col className="flight-info">
                                <Link to="/preflightmenu" className="btn btn-1">Preflight Menu</Link>
                                <Link to="/intial" className="btn btn-1">Initilize</Link>
                                <Link to="/takeoff" className="btn btn-1">Take Off data request</Link>
                                <Link to="/expected" className="btn btn-1">Expected off time report</Link>
                            </Col>

                            {/* In Flight Menu */}


                            <Col className="flight-info">
                                <Link to="/inflightmenu" className="btn btn-1">Inflight Menu</Link>
                                <Link to="/howgozit" className="btn btn-1">Howcozit Request</Link>
                                <Link to="/landing" className="btn btn-1">Landing Data Request</Link>
                                <Link to="/weather" className="btn btn-1">Weather request</Link>
                                <Link to="/notam" className="btn btn-1">Notam Request</Link>
                                <Link to="/reminders" className="btn btn-1">Reminders</Link>
                                <Link to="/diversionreport" className="btn btn-1">Diversion report</Link>
                            </Col>


                                {/* Post Flight MEnu */}

                            <Col className="flight-info">
                                <Link to="/postflightmenu" className="btn btn-1">Post Flight Menu</Link>
                                <Link className="btn btn-1">Maintance Menu</Link>
                                <Link to="/uacomm" className="btn btn-1">Ua comm</Link>
                                <Link to="/ooo1time" className="btn btn-1">oooi times</Link>
                                <Link to="/gateassign" className="btn btn-1">gate assign request</Link>
                            </Col>
                        </Row>
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default CompanyMenu;

