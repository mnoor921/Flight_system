import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ClearanceRequest() {
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
              clearance request
            </h4>

            <hr />

            <form action="">
              <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <input type="checkbox" />
                  <label htmlFor="" className="ml-3">
                    request clearance:
                  </label>
                </div>
                
              </div>
              

              {/* <br/> */}

              
              <br/>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

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

export default ClearanceRequest;
