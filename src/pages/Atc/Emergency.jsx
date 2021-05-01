import React from "react";
import Header from "../Header";
import Beer from "../../assests/buy_bear.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Emergency() {
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
              Emergency report
            </h4>

            <hr />

            <form action="">
              <br />

              <div
                className="d-flex w-100 mt-2"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex  ">
                  <input type="radio" />

                  <label htmlFor="" className="ml-3">
                    mayday:
                  </label>
                </div>
                <div className="d-flex  ">
                  <input type="radio" />

                  <label htmlFor="" className="ml-3">
                    pan:
                  </label>
                </div>
                <div className="d-flex  ">
                  <input type="radio" />

                  <label htmlFor="" className="ml-3">
                    Cancel <br /> emergency:
                  </label>
                </div>
              </div>

              <div className="d-flex w-100 diverting ">
                <input type="checkbox" />
                <label htmlFor="" className="ml-1 ">
                  diverting to:
                </label>
                <input name="" className="mx-1 " placeholder="------------" />
                <label htmlFor="">Via Route 1</label>
              </div>
              <br />

              <div className="d-flex w-100">
                <div className="d-flex w-50 ">
                  <input type="checkbox" />
                  <label htmlFor="" className="ml-3  text-right">
                    fuel remaining:
                  </label>
                </div>
                <div className="">
                  <label htmlFor="">41.2lbs X 1000</label> <br />
                  <span>
                    <input type="text" placeholder="0437" className="mx-2" />
                    HOURS + MINUTES
                  </span>
                </div>
              </div>

              <br />

              <div className="d-flex w-100 mt-3 ">
                <label htmlFor="" className="mr-3 w-50 text-right">
                  person on board :
                </label>
                <input
                  type="text"
                  placeholder="-----------"
                  placeholder="-----------"
                  style={{ width: "70px" }}
                />
              </div>
              <div className="d-flex w-100 mt-3 ">
                <label htmlFor="" className="mr-3 w-50 text-right">
                  descending to :
                </label>
                <input type="text" placeholder="-----------" />
              </div>
              <div className="d-flex w-100 mt-3 ">
                <label htmlFor="" className="mr-3 w-50 text-right">
                  offsetting to :
                </label>
                <input
                  type="text"
                  placeholder="-----------"
                  style={{ width: "70px" }}
                />
              </div>

              <br />
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
                  {/* <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a> */}
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

export default Emergency;
