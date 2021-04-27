import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Intialized() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />
                        
                        <h4 className="text-center text-white text-uppercase">Initialize</h4>
                        
                        <hr/>
                        <Row className="mx-4 p-2" style={{border:'1px solid silver'}}>
                            <Col md={6} xs={12} className="flight-info">


                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3 text-white check-box" >
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`Auto Check`}
                                            />


                                        </div>
                                    ))}
                                </Form>


                                {/* all data */}

                                <div className="intail-text">

                                    <div className="labels d-flex w-100 mt-2">
                                        <div className="label-heading-1 mx-2" style={{width:'30%'}}>
                                            <h4 className="float-right">Flat No:</h4>
                                        </div>
                                        <div className="label-heading " >
                                            <input type="text" placeholder="XXXXXX" style={{width:'40px'}} />
                                        </div>

                                    </div>

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2 " style={{width:'30%'}}>
                                            <h4>Date:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" style={{width:'40px'}}/>
                                        </div>

                                    </div>


                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2" style={{width:'30%'}}>
                                            <h4>Depat:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" style={{width:'60px'}}/>
                                        </div>

                                    </div>

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2 " style={{width:'30%'}}>
                                            <h4>Arrivl:</h4>
                                        </div>
                                        <div className="label-heading  " style={{width:'30%'}}>
                                            <input type="text" placeholder="XXXXXX" style={{width:'60px'}}/>
                                        </div>

                                    </div>


                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2" style={{width:'30%'}}>
                                            <h4>FLT Time:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" style={{width:'60px'}}/>
                                        </div>

                                    </div>

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2 " style={{width:'30%'}}>
                                            <h4>ALTN1:</h4>
                                        </div>
                                        <div className="label-heading " >
                                            <input type="text" placeholder="XXXXXX" style={{width:'40px'}}/>
                                        </div>

                                    </div>

                                    <div className="labels d-flex mt-2">
                                        <div className="label-heading-1 mx-2" style={{width:'30%'}}>
                                            <h4>ALTN2:</h4>
                                        </div>
                                        <div className="label-heading ">
                                            <input type="text" placeholder="XXXXXX" style={{width:'40px'}}/>
                                        </div>

                                    </div>


                                </div>




                            </Col>
                            <Col md={6} xs={12} className="mt-2">


                                <p>FOB: <span><input type="text" className="mx-2 w-25" placeholder="XXXXXX" /></span>KLBS</p>


                                <p>BD Fuel: <span><input type="text" className="mx-2 w-25" placeholder="XXXXXX" /></span>XXXX</p>

                                {/* fuel */}

                                <br />
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`GALS `}
                                            />

                                            <br />

                                            <Form.Check
                                                type={type}
                                                label={`LTRS `}
                                                id={`disabled-default-${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                                <br />

                                <Link to="/poilet" className="btn btn-1 float-right">Pilot Information <br /> Page 2</Link>




                            </Col>
                        </Row>


                        <Footer />
                        <div className="bg-dark w-100" style={{height:'40px'}}>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Intialized;

