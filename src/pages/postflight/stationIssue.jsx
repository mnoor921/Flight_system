import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function StationIssue() {
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
            STATION ISSUE REPORT
            </h4>

            <hr />

            <div className=" mx-5">
              <form action="">
                <Row>
                    <Col></Col>
                  <Col md={6} xs={12}>

                    
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                       Late Marshaller
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Late Jetbridge Dr
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        late Ground Pwr
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        late air cond
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        No gate available
                      </label>
                    </div>
                    
                    
                  </Col>
                  <Col></Col>
                 </Row>
              </form>
            </div>

            <Footer/>
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default StationIssue;
