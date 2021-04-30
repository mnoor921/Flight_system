import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Howgozit() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Howgozit Request</h4>

                        <hr />

                        <div className="howcozit text-center">
                            <div className="howcoxit-text w-100 text-left mt-5 mx-auto">
                                <div className="d-flex mt-2">
                                    <h4 className="w-50 text-right mx-2">Flight Number:</h4>
                                    <input type="text" placeholder="XXXXX" className="mx-3" style={{width:'50px'}}/>
                                </div>
                                <div className="d-flex mt-2">
                                    <h4 className="w-50 text-right mx-2">Flight Date:</h4>
                                    <input type="text" placeholder="XXXXX" className="mx-3" style={{width:'40px'}}/>
                                </div>
                                <div className="d-flex mt-2">
                                    <h4 className="w-50 text-right mx-2">Departure Airport:</h4>
                                    <input type="text" placeholder="XXXXX" className="mx-3" style={{width:'50px'}} />
                                </div>
                            </div>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>


                        <Footer />
                        <div className="bg-dark w-100" style={{ height: '40px' }}>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Howgozit;

