import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Weather() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Weather Request</h4>
                        <hr />
                        <Form>
                            <Row>
                                <Col>
                                    <div className="ml-3">

                                        <Form.Check
                                        className="mt-3"

                                            id={`custom`}
                                            label={`METER`}
                                        />

                                        <Form.Check
                                        className="mt-3"

                                            label={`PILOT CREW DESK`}
                                            id={`TAF`}
                                        />


                                        <Form.Check
                                        className="mt-3"

                                            label={`Airport Condition`}
                                            id={`custom`}
                                        />

                                        <Form.Check
                                        className="mt-3"

                                            label={`Area Weather`}
                                            id={`custom`}
                                        />

                                    </div>
                                </Col>



                                <Col>

                                    <div className="intail-text mt-2">
                                        <br/>

                                        <div className="labels d-flex mt-2">
                                            <div className="label-heading-1 ">
                                                <h4>Airport-1:</h4>
                                            </div>
                                            <div className="label-heading ">
                                                <input type="text" placeholder="XXXXXX" />
                                            </div>

                                        </div>

                                        <div className="labels d-flex mt-2">
                                            <div className="label-heading-1 ">
                                                <h4>Airport-2:</h4>
                                            </div>
                                            <div className="label-heading ">
                                                <input type="text" placeholder="XXXXXX" />
                                            </div>

                                        </div>


                                        <div className="labels d-flex mt-2">
                                            <div className="label-heading-1 ">
                                                <h4>Airport-3:</h4>
                                            </div>
                                            <div className="label-heading ">
                                                <input type="text" placeholder="XXXXXX" />
                                            </div>

                                        </div>

                                        <div className="labels d-flex mt-2">
                                            <div className="label-heading-1 ">
                                                <h4>Airport-4:</h4>
                                            </div>
                                            <div className="label-heading ">
                                                <input type="text" placeholder="XXXXXX" />
                                            </div>

                                        </div>


                                        <div className="labels d-flex mt-2">
                                            <div className="label-heading-1 ">
                                                <h4>Airport-5:</h4>
                                            </div>
                                            <div className="label-heading ">
                                                <input type="text" placeholder="XXXXXX" />
                                            </div>

                                        </div>




                                    </div>



                                </Col>
                            </Row>

                            <hr />
                            <Form.Check
                                className="mt-3"

                                label={`Sigmets`}
                                id={`custom`}
                            />
                            <Form.Check
                                className="mt-3"
                                label={`Pireps`}
                                id={`custom`}
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

export default Weather;

