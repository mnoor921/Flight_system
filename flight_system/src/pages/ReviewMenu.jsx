import React from 'react'
import Header from './Header'
import {  Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from 'react-bootstrap'



function ReviewMenu() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" style={{border:'1px solid silver',minHeight:'95vh'}}>
                        <Header/>
                        <h4 className="text-center text-white text-uppercase">review</h4>
                        <Row>

                            {/* Flight Menu */}

                            <Col md={4} xs={4} className="flight-info">
                                <Link to="/preflightmenu" className="btn btn-1">atc uplinks..</Link>
                                <Link to="/intial" className="btn btn-1">atc downlinks..</Link>
                                <Link to="/takeoff" className="btn btn-1">comm system message</Link>
                                
                            </Col>

                            {/* In Flight Menu */}


                            <Col md={4} xs={4} className="flight-info">
                                <Link to="/inflightmenu" className="btn btn-1">flight info uplinks..</Link>
                                <Link to="/howgozit" className="btn btn-1">flight info downlinks..</Link>
                                
                            </Col>


                                {/* Post Flight MEnu */}

                            <Col md={4} xs={4} className="flight-info">
                                <Link to="/postflightmenu" className="btn btn-1">recived...</Link>
                                <Link to="/maintaince" className="btn btn-1">sent...</Link>
                                
                            </Col>
                        </Row>
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default ReviewMenu;

