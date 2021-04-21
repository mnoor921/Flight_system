import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Landing() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">landing data request</h4>

                        <hr />

                        <div className="ml-4">

                            <div className="intail-text">

                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>Airport:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>

                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>Runway:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>


                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>LGW:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>

                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>FLAPS:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>


                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>Temprature (C):</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>

                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>Wind Dir:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>

                                <div className="labels d-flex mt-2">
                                    <div className="label-heading-1 ">
                                        <h4>WIND Speed:</h4>
                                    </div>
                                    <div className="label-heading ">
                                        <input type="text" placeholder="XXXXXX" />
                                    </div>

                                </div>


                            </div>


                        </div>
















                        <Footer />
                        <div className="bg-dark w-100" style={{ height: '40px' }}>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container >

        </div >
    );
}

export default Landing;

