import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function CreditCard() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col
            md="8"
            className="p-4"
            style={{ border: "1px solid silver", minHeight: "95vh" }}
          >
            <Header />

            <h4 className="text-center text-white text-uppercase">
            CREDIT CARD READER <br/> ISSUE Report
            </h4>

            <hr />

            <Row>
                <Col></Col>
                <Col md={6} xs={12}>
                    <div className="mt-5">
                        <p className="text-uppercase">For Reporting cabin device issues</p>
                        <textarea name="" id=""  className="form-control" placeholder="--------------------------------------------
                        ----------------------------------------" ></textarea>
                        <br/>
                        <p>MSG TO CATERING (DISP copied )</p>

                    </div>
                </Col>
                <Col></Col>
            </Row>

          
            <br />
            

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreditCard;
