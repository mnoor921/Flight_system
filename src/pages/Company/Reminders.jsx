import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Reminders() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Reminders</h4>
                        <hr />

                        <Form className="m-3">

                            <Row>
                                <Col>
                                    <label>Time :</label>
                                    <input type="time" className="form-control" />
                                </Col>
                                <Col>
                                    <Link to="/crewchange" className="btn btn-1 w-100">Crew Times</Link>
                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col>
                                    <label>Times To T/D :</label>
                                    <input type="time" className="form-control" />
                                </Col>
                                <Col>
                                    <label>Times To DEST :</label>
                                    <input type="time" className="form-control" />
                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col>
                                    <label>Way Point:</label>
                                    <input type="text" className="form-control" placeholder="XXXX" />
                                </Col>
                                <Col>
                                    <label>LATITUDE:</label>
                                    <input type="text" className="form-control" placeholder="XXXX" />
                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col>
                                    <label>LONGITUDE:</label>
                                    <input type="text" className="form-control" placeholder="XXXX" />
                                </Col>
                                <Col>
                                    <label>FUEL :</label>
                                    <input type="text" className="form-control" placeholder="XXXX" />
                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col>
                                    <label>ALTITUDE:</label>
                                    <input type="text" className="form-control" placeholder="XXXX" />
                                </Col>
                                <Col>

                                </Col>
                            </Row>

                            <div className="d-flex mt-3" style={{ justifyContent: 'space-between' }}>
                                <Form.Check

                                    id={`default`}
                                    label={`ETA CHANGE`}
                                />
                                <p>From
                                    <span className="mx-1">
                                        <input type="time" />
                                    </span>
                                    By
                                    <span className="mx-1">
                                        <input type="text"/>
                                    </span>
                                    Mintues
                                </p>

                            </div>



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

export default Reminders;

