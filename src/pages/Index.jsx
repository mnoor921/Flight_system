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
                        <h4 className="text-center text-white">Home Page</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                       <div className="text-center">
                       <label htmlFor="" className="text-center mx-auto">Well Come 
                        <br/> the Comm Menu </label>
                       </div>
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Index;

