import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function GateAssign() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Gate Assign Request</h4>
                        <hr />

                        <Form className="m-3">
                            <Form.Check

                                id={`default`}
                                label={`Gate Assignments`}
                            />

                            <hr/>

                            <div className="p-4">
                                <div className="intail-text gate-assign">

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 ">
                                            <h4>Flight Number 1:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" />
                                        </div>

                                    </div>

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 ">
                                            <h4>Flight Number 2:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" />
                                        </div>

                                    </div>


                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 ">
                                            <h4>Flight Number 3:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" />
                                        </div>

                                    </div>
                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 ">
                                            <h4>Flight Number 4:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" />
                                        </div>

                                    </div>



                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 ">
                                            <h4>Flight Number 5:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" />
                                        </div>

                                    </div>

                                    

                                    


                                </div>


                            </div>
                            <hr/>

                            <Form.Check

                                id={`default`}
                                label={`PAX CONNECTS GATES`}
                            />




                        </Form>

















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

export default GateAssign;

