import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function LevelRequest() {
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
              level request
            </h4>

            <hr />

            <form action="">
              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-25">
                  <input type="radio" />
                  <label htmlFor="" className="ml-3">
                    Level:
                  </label>
                </div>
                <input type="text" placeholder="------------" />
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-25 ">
                  <input type="checkbox" className="ml-5" />
                  <label htmlFor="" className="ml-3">
                    Step At:
                  </label>
                </div>
                <input type="text" placeholder="------------" />
              </div>

              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-25">
                  <input type="radio" />
                  <label htmlFor="" className="ml-3">
                    block:
                  </label>
                </div>
                <input type="text" placeholder="------------" />
              </div>

              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-25">
                  {/* <input type="radio" style={{visibility:'0px'}} /> */}
                  <label htmlFor="" className="ml-5">
                    to:
                  </label>
                </div>
                <input type="text" placeholder="------------" />
              </div>

              <div className="d-flex w-100 mt-2">
                <div className="d-flex w-25">
                  <input type="radio" />
                  <label htmlFor="" className="ml-3">
                    request cruies climb to:
                  </label>
                </div>
                <input type="text" placeholder="------------" />
              </div>

              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <input type="checkbox" className="ml-5" />
                  <label htmlFor="" className="ml-3">
                    {" "}
                    At pilot description:
                  </label>
                </div>
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <input type="checkbox" className="ml-5" />
                  <label htmlFor="" className="ml-3">
                    Due to weather:
                  </label>
                </div>
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <input type="checkbox" className="ml-5" />
                  <label htmlFor="" className="ml-3">
                    Due to aircrafts performance:
                  </label>
                </div>
              </div>
              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <input type="checkbox" className="ml-5" />
                  <label htmlFor="" className="ml-3">
                    maintaine own sepration and vmc:
                  </label>
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

            {/* <Footer /> */}
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LevelRequest;
