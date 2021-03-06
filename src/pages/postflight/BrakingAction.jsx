import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function BarkingAction() {
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
              Postflight report
            </h4>

            <hr />

            <div className=" mx-5">
              <form action="">
                <Row>
                  <Col>

                    <label htmlFor="" className="t mt-4">
                      Braking action :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        No Effort
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        good
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        good / med
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        med
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        med / poor
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        poor
                      </label>
                    </div>
                    
                  </Col>
                  <Col>

                  <div className="mt-4">
                      <div className="d-flex  ">
                        <input
                          type="checkbox"
                          name="muhRadio"
                          value=""
                          style={{ width: "20px", height: "20px" }}
                        />
                        <label
                          htmlFor=""
                          style={{ marginLeft: "20px", marginTop: "-5px" }}
                        >
                          RNAV/GLS APPROACH
                        </label>
                      </div>
                    </div>

                    
                    <label htmlFor="" className="t mt-4">
                      Approach sucessful :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        yes
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        no
                      </label>
                    </div>

                    
                    <label htmlFor="" className="t mt-4">
                    DIVERSION PREVENTED :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        yes
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        no
                      </label>
                    </div>



                  </Col>
                </Row>
              </form>
            </div>

            <div className="header-label mt-5 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a>
                  <ul className="d-flex left-button float-right">
                    <li>
                      <a href="" className="btn btn-1">
                        Reset
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Return
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Exit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default BarkingAction;
