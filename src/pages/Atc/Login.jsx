import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Login() {
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
              atc logon / status
            </h4>

            <hr />

            <form action="">
              <br />

              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-100 ">
                  <label htmlFor="" className="ml-3 w-25 text-right">
                    logon to:
                  </label>
                  <input name="" className="ml-3" placeholder="------------" />
                </div>
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-100 ">
                  <label htmlFor="" className="ml-3 w-25 text-right">
                    flight number:
                  </label>
                  <input name="" className="ml-3" placeholder="UAL 427" />
                </div>
              </div>

              <br />

              <div
                className="d-flex w-100 mt-2"
                style={{ justifyContent: "center" }}
              >
                <div className="d-flex w-25 ">
                  <label htmlFor="" className="ml-3">
                    origin: <span className="ml-2">ksfo</span>
                  </label>
                </div>
                <div className="d-flex w-25 ">
                  <label htmlFor="" className="ml-3">
                    destination: <span className="ml-2">kiad</span>
                  </label>
                </div>
              </div>

              <div className="d-flex w-100 mt-2 ">
                <label htmlFor="" className="mr-3 text-right  w-50">
                  atc connection:
                </label>
                <label htmlFor="">Not established</label>
              </div>

              <div className="d-flex w-100 mt-2 ">
                <label htmlFor="" className="mr-3 text-right  w-50">
                  active center:
                </label>
                {/* <label htmlFor="">Not established</label> */}
              </div>
              <div className="d-flex w-100 mt-2 ">
                <label htmlFor="" className="mr-3 text-right  w-50">
                  next center:
                </label>
                {/* <label htmlFor="">Not established</label> */}
              </div>

              <br />
              <div className="d-flex w-100 mt-2 ">
                <label htmlFor="" className="mr-3 text-right  w-50">
                  ads status:
                </label>
                <label htmlFor="">Armed</label>
              </div>
            </form>

            <div className="header-label mt-3 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  {/* <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a> */}
                  <ul className="d-flex left-button float-right">
                    <li>
                      <a href="" className="btn btn-1">
                        ads manager
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

            {/* <Footer /> */}
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
