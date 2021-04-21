import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function FlightStatus() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">flight status request</h4>
                        

                        <hr />

                        <div className="m-5">
                            <Form>

                                <Row>
                                    <Col>
                                        <label htmlFor="">Flight Number</label>
                                        <input type="text" placeholder="XXXXXX" className="form-control" />

                                    </Col>
                                    <Col>

                                        <label htmlFor="">Date</label>
                                        <input type="date" placeholder="XXXXXX" className="form-control" />


                                    </Col>
                                </Row>

                                <br />

                                <label htmlFor="">Time Value :</label>
                                <Form.Check
                                    
                                    id={`default-`}
                                    label={`LOCAL `}
                                />

                                <Form.Check
                                   
                                    id={`default-`}
                                    label={`ZULU `}
                                />

                            </Form>




                        </div>


                        <br />













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

export default FlightStatus;

