import React from 'react'
import Header from './Header'
import {  Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from 'react-bootstrap'



function InFlightMenu() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" style={{border:'1px solid silver',minHeight:'95vh'}}>
                        <Header/>
                        <Link to="/company" className="btn btn-1 w-100" style={{background:'#77DF8C',color:'#fff'}}>Company</Link>
                        <h4 className="text-center text-white text-uppercase mt-2">In Flight menu</h4>
                        <Row>

                            {/* Flight Menu */}

                            <Col className="flight-info">
                                <Link to="/redispatch" className="btn btn-1">Redispatch message</Link>
                                <Link to="/takeoff" className="btn btn-1">Landing data request</Link>
                                <Link to="/flightpaper" className="btn btn-1">Flight Paper Request</Link>
                                <Link to="/landinggross" className="btn btn-1">Landing gross weight request</Link>
                                <Link to="/submitpriep" className="btn btn-1">Submit pirep request </Link>
                                <Link to="/raim" className="btn btn-1">Raim Request </Link>
                                {/* <Link to="/readyreport" className="btn btn-1">Read</Link> */}
                            </Col>

                            {/* In Flight Menu */}


                            <Col className="flight-info">
                                <Link  to="/etops" className="btn btn-1">etops alt wx message</Link>
                                <Link to="/flightstatus" className="btn btn-1">Flight Status Request</Link>
                                <Link to="/dispatchrelease" className="btn btn-1">Dispatch Relase REO</Link>
                                <Link to="/airportdelay" className="btn btn-1">Airport Delay Request</Link>
                                <Link to="/holdexpect" className="btn btn-1">Hold / expect further clrnc</Link>
                                <Link to="/expectedtime" className="btn btn-1">Expected on time report</Link>

                            </Col>


                                {/* Post Flight MEnu */}

                            <Col className="flight-info">
                                <Link to="/pdcrequest" className="btn btn-1">Howcozit request</Link>
                                <Link to="/departuredelay" className="btn btn-1">Departure Delay code</Link>
                                <Link to="/medicalreport" className="btn btn-1">Medical report</Link>
                                {/* <Link to="/fuelslip" className="btn btn-1">Fuel Slip Form request</Link> */}
                                <Link to="/miscellaneous" className="btn btn-1">Miscellaneous Code</Link>
                            </Col>
                        </Row>
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default InFlightMenu;

