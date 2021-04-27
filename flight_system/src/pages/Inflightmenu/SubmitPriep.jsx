import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function SubmitPriep() {
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
              Submit pirep report
            </h4>

            <hr />
            <br />
            <form action="">
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "20%" }}
                >
                  Position :
                </label>
                <input
                  type="text "
                  placeholder="XXXXX"
                  style={{ width: "30%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "20%" }}
                >
                  Time of event :
                </label>
                <input
                  type="text "
                  placeholder="XXXXX"
                  style={{ width: "20%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "20%" }}
                >
                  Flight Level :
                </label>
                <input
                  type="text "
                  placeholder="XXXXX"
                  style={{ width: "15%" }}
                />
              </div>

              <div className="d-flex w-100">
                <div className="d-flex w-50 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "40%" }}
                  >
                    Fuel on board :
                  </label>
                  <input
                    type="text "
                    placeholder="XXXXX"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="d-flex w-50 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "30%" }}
                  >
                    wind dir :
                  </label>
                  <input
                    type="text "
                    placeholder="XXXXX"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
              <div className="d-flex w-100">
                <div className="d-flex w-50 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "40%" }}
                  >
                    Static air temp :
                  </label>
                  <input
                    type="text "
                    placeholder="XXXXX"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="d-flex w-50 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "30%" }}
                  >
                    wind speed :
                  </label>
                  <input
                    type="text "
                    placeholder="XXXXX"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>

              <div className="mx-5 mt-4">
                <Row>
                  <Col>
                    <label htmlFor="" className="mt-4">
                      TURBULENCE :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        none
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        light
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        moderate
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        severe
                      </label>
                    </div>
                  </Col>

                  <Col>
                    <label htmlFor="" className="mt-4">
                      ICING :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        none
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        light
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        moderate
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        severe
                      </label>
                    </div>
                  </Col>
                </Row>

                <br/>
                <label htmlFor="">Sky Conditions</label>
                
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Clear
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        In clouds
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        on top
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Between layers
                      </label>
                    </div>
                    <br/>
                    <label htmlFor="">Remarks</label>
                    <textarea name="" id="" className="form-control" ></textarea>


              </div>
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

export default SubmitPriep;
