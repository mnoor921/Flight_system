import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function PostFlightReport() {
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
                    <div className="d-flex w-100 mt-2">
                      <label
                        htmlFor=""
                        className="text-right mr-3"
                        style={{ width: "25%" }}
                      >
                        FOB:
                      </label>
                      <input
                        type="text"
                        className="mr-2"
                        placeholder="-----------"
                        style={{ width: "60px" }}
                      />
                      Z
                    </div>

                    <label htmlFor="" className="t mt-4">
                      APPROACH CAT :
                    </label>
                    <div className="d-flex mt-3 ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        No Report
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        ILS-cat 2
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        ILS-cat 3
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        gLS-cat 1
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        gLS-cat 2
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        gLS-cat 3
                      </label>
                    </div>
                    <div className="d-flex mt-3">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        ranv (rnp)
                      </label>
                    </div>
                  </Col>
                  <Col>
                    <label htmlFor="" className="t mt-4">
                      Pilot landing :
                    </label>

                    <div className="d-flex mt-3  ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Employee # :
                      </label>
                      <input
                        type="text"
                        className="ml-1 w-50"
                        placeholder="XXXX"
                      />
                    </div>
                    <div className="d-flex mt-3  ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Employee # :
                      </label>
                      <input
                        type="text"
                        className="ml-1 w-50"
                        placeholder="XXXX"
                      />
                    </div>
                    <div className="d-flex mt-3  ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Employee # :
                      </label>
                      <input
                        type="text"
                        className="ml-1 w-50"
                        placeholder="XXXX"
                      />
                    </div>
                    <div className="d-flex mt-3  ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Employee # :
                      </label>
                      <input
                        type="text"
                        className="ml-1 w-50"
                        placeholder="XXXX"
                      />
                    </div>
                    <div className="d-flex mt-3  ">
                      <input type="radio" name="muhRadio" value="" />
                      <label
                        htmlFor=""
                        style={{ marginLeft: "20px", marginTop: "-5px" }}
                      >
                        Employee # :
                      </label>
                      <input
                        type="text"
                        className="ml-1 w-50"
                        placeholder="XXXX"
                      />
                    </div>

                    <div
                      className=" post-flight"
                      style={{ marginLeft: "-5rem" }}
                    >
                      <label htmlFor="" className="t mt-4">
                        AutoLand :
                      </label>
                      <div className="d-flex mt-3  ">
                        <input type="radio" name="muhRadio" value="" />
                        <label
                          htmlFor=""
                          style={{ marginLeft: "20px", marginTop: "-5px" }}
                        >
                          yes
                        </label>
                      </div>
                      <div className="d-flex mt-3  ">
                        <input type="radio" name="muhRadio" value="" />
                        <label
                          htmlFor=""
                          style={{ marginLeft: "20px", marginTop: "-5px" }}
                        >
                          no
                        </label>
                      </div>
                    </div>

                    <Link to="/barkingaction" className="btn btn-1 float-right">
                      BRAKING ACTION on page 2
                    </Link>
                  </Col>
                </Row>
              </form>
            </div>

            <div className="header-label mt-3 mb-0 pb-0">
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
            <br />
            <div className=" text-center mx-auto">
            <label htmlFor="">
                if you find this site helpful, <br /> i won't say no to a beer
              </label> <br/>
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

export default PostFlightReport;
