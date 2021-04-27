import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Ooo1Time() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Ooo1time</h4>
                        <hr />
                        <h4 className="text-center text-white text-uppercase">Current Flight</h4>


                        <Form>

                            <div className="text-center">
                                <div className="d-flex">
                                    <p className="">
                                        <label htmlFor="">Flight No : </label>
                                        <span><input type="text" placeholder="XXX" className=" w-25" /></span>
                                    </p>
                                    <p className="mx-1">
                                        <label htmlFor="" className="mr-1">Dept / Dest :</label>
                                        <span><input type="text" className=" w-25" placeholder="XXX" /></span>/
                                        <span><input type="text" className=" w-25" placeholder="XXX" /></span>
                                    </p>





                                </div>
                                <div className="ooo1">
                                    <p>
                                        <label htmlFor="">Crew Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>
                                    <p>
                                        <label htmlFor="">Out Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>

                                    <p>
                                        <label htmlFor="">Off Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>

                                    <p>
                                        <label htmlFor="">On Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>

                                    <p>
                                        <label htmlFor="">In Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>

                                    <p>
                                        <label htmlFor="">Trip Time  : </label>
                                        <span><input type="time" /></span>
                                    </p>
                                </div>










                            </div>

                            <Link to="/ooo1time2" className="btn btn-1 float-right">Page 2</Link>





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

export default Ooo1Time;

