import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Raim() {
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
              Raim request
            </h4>

            <hr />
            <br />

            <div className="text-center m-3">
              <p className="text-uppercase">
                GPS availability for <br /> RNP approaches
              </p>
              <form action="">
                <div className="d-flex w-100 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "45%" }}
                  >
                    airport / waypoint :
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
                    style={{ width: "45%" }}
                  >
                    Eta :
                  </label>
                  <input
                    type="text mx-2"
                    placeholder="-----------"
                    style={{ width: "70px" }}
                  /> 
                  Z
                </div>
                <div className="d-flex w-100 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "45%" }}
                  >
                    RNP :
                  </label>
                  <input
                    type="text mx-2"
                    placeholder="0.30"
                    style={{ width: "70px" }}
                  />
                </div>
              </form>
            </div>

            <div className="header-label mt-3 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  <a href="" className="btn btn-1 pb-0 float-left">Send</a>
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

export default Raim;
