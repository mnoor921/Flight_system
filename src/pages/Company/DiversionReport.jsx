import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function DiversionReport() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Diversion Report</h4>
                        <hr />

                        <Form className="m-3">

                            <Row>
                                <Col>
                                    <label>Diverting to :</label>
                                    <input type="text" className="form-control" />
                                </Col>
                                <Col>
                                    <label> Expected On Time :</label>
                                    <input type="time" className="form-control" />

                                </Col>
                            </Row>
                            <br />

                            <Row>
                                <Col>
                                    <label>FOB</label>
                                    <input type="text" className="form-control" />
                                </Col>
                                
                            </Row>
                            <br />

                            <Row className="mx-3">
                                <label htmlFor="">Remarks</label>
                                <textarea name="" id="" className="form-control" placeholder="XXXX"></textarea>
                            </Row>
                            <br />

                            

                           



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

export default DiversionReport;

