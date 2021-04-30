import React from "react";
import Header from "../Header";
import Beer from "../../assests/buy_bear.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function PositionReport() {
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
              Position report
            </h4>

            <hr />

            <form action="">
              <br />

              <div
                className="d-flex w-100 mt-2"
                style={{ justifyContent: "space-around" }}
              >
                <div className="d-flex  ">
                  {/* <input type="radio" /> */}

                  <label htmlFor="" className="ml-3">
                    waypoints:
                  </label>
                </div>
                <div className="d-flex  ">
                  <input type="radio" />

                  <label htmlFor="" className="ml-3">
                    compulsory only:
                  </label>
                </div>
                <div className="d-flex  ">
                  <input type="radio" />

                  <label htmlFor="" className="ml-3">
                    all
                  </label>
                </div>
              </div>

              <div
                className="d-flex w-100 mt-4"
                style={{ justifyContent: "space-around" }}
              >
                <label htmlFor="">
                  POS : <span className="ml-2">garot</span>
                </label>
                <label htmlFor="">
                  ata : <span className="ml-2">642z</span>
                </label>
              </div>
              <div className="d-flex w-100 mt-4 ml-5">
                <label htmlFor="">
                  level : <span className="ml-2">fl390</span>
                </label>
              </div>

              <div className="d-flex w-100">
                <div className="d-flex w-50 ">
                  <label htmlFor="" className="mr-3 w-25 text-right">
                    est:
                  </label>
                  <input type="text" placeholder="EKR" />
                </div>
                <div className="w-50">
                  <label htmlFor="">eta:</label>
                  <input type="text" placeholder="0437" className="mx-2" />z
                </div>
              </div>

              <div className="d-flex w-100">
                <div className="d-flex w-50 ">
                  <label htmlFor="" className="mr-3 w-25 text-right">
                    next:
                  </label>
                  <input type="text" placeholder="OBH" />
                </div>
              </div>
              <br />
              <div className="d-flex w-100">
                <div className="d-flex w-50 ">
                  <label htmlFor="" className="mr-3  text-right">
                    temp: <span className="mx-2">-60C</span>
                  </label>
                </div>
                <div className="w-50">
                  <label htmlFor="">
                    wind:
                    <span className="mx-2">272 / 49kt</span>
                  </label>
                </div>
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-50 ">
                  <label htmlFor="" className="mr-3 w-25 text-right">
                    speed:
                  </label>
                  <input type="text" placeholder="EKR" />
                </div>
                <div className="w-50">
                  <label htmlFor="">dest eta:</label>
                  <input type="text" placeholder="0437" className="mx-2" />z
                </div>
              </div>

              <br />
              <div className="ml-5">
                <label htmlFor="">
                  pos fuel: <span className="mx-5">44.4lbs X 1000</span>
                </label>
              </div>

              <div
                className="d-flex w-100 mt-2"
                style={{ justifyContent: "space-around" }}
              >
                <div className="  ">
                  <label htmlFor="">turbulence:</label>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      light
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      moderate
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      severe
                    </label>
                  </div>
                </div>
                <div className="  ">
                  <label htmlFor="">icing:</label>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      trace
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      light
                    </label>
                  </div>
                </div>
                <div className="  ">
                  <div className="d-flex mt-5">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      moderate
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />

                    <label htmlFor="" className="ml-3">
                      severe
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <label htmlFor="" className="ml-3">
                    free text:
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="3"
                    className="ml-3"
                    placeholder="------------"
                  ></textarea>
                </div>
              </div>
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
                        print
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
              <Link
                to="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
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
              </Link>
            </div>

            {/* <Footer /> */}
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default PositionReport;
