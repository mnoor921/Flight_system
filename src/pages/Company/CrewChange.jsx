import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function CrewChange() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Crew Time Reminders</h4>
                        <hr />

                        <div className="mt-5 text-center">
                            <p>UTC Time : <span className="mx-2"><input type="time" /></span></p>
                            <br />
                            <input type="text" placeholder="XXXX" />
                        </div>

                        <br />
                        <br />
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

export default CrewChange;

