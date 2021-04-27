import React from 'react'
import Header from './Header'
import {  Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from 'react-bootstrap'



function Message() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" style={{border:'1px solid silver',minHeight:'95vh'}}>
                        <Header/>
                        <br/>
                        <h4 className="text-center text-white">New Messages</h4>

                        <div className="new-massage mx-5">
                            <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        
                    
                    
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Message;

