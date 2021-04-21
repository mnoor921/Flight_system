import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";
import Footer from '../Footer'


import { Container, Row, Col, Form } from 'react-bootstrap'


function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


function FlightPaper() {







    return (
        <div>

            <Container className="my-3">
                <Row>
                    <Col></Col>
                    <Col md="8" className="p-4" style={{ border: '1px solid silver', minHeight: '95vh', }}>
                        <Header />

                        <h4 className="text-center text-white text-uppercase">Flight paper request</h4>

                        <hr />
                        <Form>
                            <Row className="m-3">
                                <Col>

                                    <label htmlFor="">Single Request :</label>
                                    <br />
                                    <Form.Check

                                        id={`default-`}
                                        label={`Flight plan `}
                                    />

                                    <Form.Check

                                        id={`default-`}
                                        label={`FLT Brief Summary `}
                                    />

                                    <Form.Check

                                        id={`default-`}
                                        label={`Weather brefing `}
                                    />

                                    <Form.Check

                                        id={`default-`}
                                        label={`mx log history `}
                                    />

                                    <Form.Check

                                        id={`default-`}
                                        label={`Defferec in bound   `}
                                    />





                                </Col>
                                <Col>

                                    <label htmlFor="" className="mt-2">Flight Number :</label>
                                    <input type="text" className="form-control " placeholder="XXXXX" />

                                    <label htmlFor="" className="mt-2">Flight Date :</label>
                                    <input type="date" className="form-control" placeholder="XXXXX" />

                                    <label htmlFor="" className="mt-2">Dept Airport :</label>
                                    <input type="text" className="form-control" placeholder="XXXXX" />


                                </Col>
                            </Row>

                            <div className="ml-3 mt-3 d-flex">
                                <div className=" mx-2">
                                    <label htmlFor="">All Request</label>

                                    <Form.Check

                                        id={`default-`}
                                        label={`Full Flight Paper (Expect FLT Brief)  `}
                                        id="myCheck" onClick={myFunction}

                                    />
                                </div>



                                <div id="text" className="float-right">

                                    <label htmlFor="">Send to</label>


                                    <Form.Check

                                        id={`default-`}
                                        label={`Aircraft`}

                                    />

                                    <Form.Check

                                        id={`default-`}
                                        label={`Gate  `}

                                    />


                                </div>

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

export default FlightPaper;

