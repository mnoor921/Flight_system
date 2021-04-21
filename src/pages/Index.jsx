import React from 'react'
import Header from './Header'
import {  Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from 'react-bootstrap'



function Index() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" style={{border:'1px solid silver',minHeight:'95vh'}}>
                        <Header/>
                        <br/>
                        <h4 className="text-center text-white">Flight Information</h4>
                        <Row>
                            <Col className="flight-info">
                                <Link className="btn btn-1">Departure Clearance Reuest</Link>
                                <Link className="btn btn-1">Departure Clearance Reuest</Link>
                                <Link className="btn btn-1">Departure Clearance Reuest</Link>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Index;

