import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function UaComm2() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Ua comm</h4>

                        <hr />
                        <Form>
                            
                            <Row>

                                <Col md={8} xs={12}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">

                                        <Form.Control as="textarea" rows={6} placeholder="Here are Come Text" />
                                        <Form.Label>MSG to Dispatcher Only</Form.Label>
                                    </Form.Group>

                                </Col>
                                <Col>

                                    

                                        


                                        <Link to="/uacomm" className="btn btn-1 mt-5">Go Back</Link>

                                    



                                </Col>



                            </Row>
                        </Form>














                        
                        {/* Footer */}
                        <div className="header-label mt-3 mb-0 pb-0">

                            <div className="all-buttons-footer">

                                <div className="" style={{justifyContent:'space-between'}}>
                                    <a href="" className="btn btn-1 pb-0 float-left">Send</a>
                                    <ul className="d-flex left-button float-right">
                                        <li>
                                            <a href="" className="btn btn-1">Print</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Reset</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Return</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Exit</a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>
                    


                        <div className="bg-dark w-100 " style={{ height: '40px', marginTop:'60px' }}>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container >

        </div >
    );
}

export default UaComm2;

