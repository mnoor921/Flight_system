import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'



function Miscellaneous() {
    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">MISCELLANEOUS CODE</h4>

                        <hr />
                        

                        <Form className="m-5">
                            <label htmlFor="">Miscellaneous :</label>
                            <textarea name="" id="" placeholder="XXXX"  className="form-control"></textarea>
                        </Form>

                        <br/>
                        <br/>
                        











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

export default Miscellaneous;

