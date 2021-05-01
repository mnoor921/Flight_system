import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function MedicalReport() {
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
              Medical report
            </h4>

            <hr />
            <br />
            <form action="">
              {/* page 1 */}

              <Row>
                <Col md={4} xs={12}>
                  <div className="d-flex w-100 mt-5">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "20%" }}
                    >
                      age :
                    </label>
                    <input
                      type="text mx-2"
                      placeholder="...."
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="d-flex w-100 mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "20%" }}
                    >
                      bp :
                    </label>
                    <span>
                      <input
                        type="text mx-2"
                        placeholder="...."
                        style={{ width: "60px" }}
                      />{" "}
                      /
                      <input
                        type="text mx-2"
                        placeholder="...."
                        style={{ width: "60px" }}
                      />
                    </span>
                  </div>
                </Col>

                <Col md={4} xs={6}>
                  <label htmlFor="" className="text-center">
                    gender
                  </label>
                  <div className="d-flex mt-3 ">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      Male
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      female
                    </label>
                  </div>
                </Col>
                <Col>
                  <label htmlFor="" className="text-center">
                    CONSCIOUS
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

              <Row>
                <Col md={6} xs={6}>
                  <label htmlFor="" className="mt-4">
                    RESPIRATION :
                  </label>
                  <div className="d-flex mt-3 ">
                    <input type="radio" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      Unknown
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      normal
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      rapid
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      slow
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      Irregular
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      None
                    </label>
                  </div>
                </Col>
                <Col md={6} xs={6}>
                  <label htmlFor="" className="mt-4">
                    PULSE :
                  </label>
                  <div className="d-flex mt-3 ">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      Unknown
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      normal
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      rapid
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      slow
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      Irregular
                    </label>
                  </div>
                  <div className="d-flex mt-3">
                    <input type="radio" name="muhRadio" value="" />
                    <label
                      htmlFor=""
                      style={{ marginLeft: "20px", marginTop: "-5px" }}
                    >
                      None
                    </label>
                  </div>
                </Col>
              </Row>

              {/* page 2 */}

              <div className="mx-5 mt-4">
                <label htmlFor="" className="mt-4">
                  Med alert tag :
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
              </div>
              <br />
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Complaints :
                </label>
                <textarea
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Medication :
                </label>
                <textarea
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "80%" }}
                />
              </div>

              {/* Page 3 */}

              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Medical History :
                </label>
                <textarea
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Allergies :
                </label>
                <textarea
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Passenger Name :
                </label>
                <input
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "27%" }}
                >
                  Seat :
                </label>
                <input
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "70px" }}
                />
              </div>

              <div className="d-flex w-100 mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "30%" }}
                >
                  Physician Name :
                </label>
                <input
                  type="text mx-2"
                  placeholder="-----------"
                  style={{ width: "70%" }}
                />
              </div>

              <br />
            </form>

            <div className="header-label mt-3 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a>
                  <ul className="d-flex left-button float-right">
                    <li>
                      <a href="" className="btn btn-1">
                        Print
                      </a>
                    </li>
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
            <br />
            <div className=" text-center mx-auto">
            <label htmlFor="">if you find this site helpful, <br/> i won't say no to a beer</label> <br/>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
                className=" mx-auto"
              >
                <img
                  src={Beer}
                  width="120"
                  height="50"
                  className="my-2"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </a>
            </div>
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MedicalReport;
