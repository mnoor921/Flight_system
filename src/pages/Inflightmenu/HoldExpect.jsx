import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function HoldExpect() {
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
              HoldExpect Further <br/> clearance Report
            </h4>

            <hr />
            <br/>
            <form action="">

                <div className="d-flex w-100 mt-2">
                    <label htmlFor="" className="text-right mr-3" style={{width:'50%'}}>Holding Fix :</label>
                    <input type="text mx-2" style={{width:'20%'}}/>
                </div>
                <div className="d-flex w-100 mt-2">
                    <label htmlFor="" className="text-right mr-3" style={{width:'50%'}}>Expect Further Clearance :</label>
                    <input type="text mx-2" style={{width:'20%'}}/>
                </div>
                <div className="d-flex w-100 mt-2">
                    <label htmlFor="" className="text-right mr-3" style={{width:'50%'}}>FOB :</label>
                    <input type="text mx-2" style={{width:'20%'}}/>
                </div>

                <br/>
                <Row>
                  <Col></Col>
                  <Col md={6} xs={12}>
                      <label htmlFor="">Remarks :</label>
                    <textarea name="" className="form-control mt-1" placeholder="-------------------------"></textarea>
                  </Col>
                  <Col></Col>
                </Row>


            </form>
            

            

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default HoldExpect;
