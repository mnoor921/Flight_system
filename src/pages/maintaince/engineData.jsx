import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function EngineData() {
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
              ELEC LOGBOOK ENTRY (FRM)
            </h4>

            <hr />
            <form action="" className="mt-5">
            <Row>
              <Col>
                
                  <div className="d-flex  mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "40%" }}
                    >
                      tat:
                    </label>
                    <input
                      type="text"
                      className="mr-2"
                      placeholder="-----"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="d-flex  mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "40%" }}
                    >
                      mach:
                    </label>
                    <input
                      type="text"
                      className="mr-2"
                      placeholder="-----"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="d-flex  mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "40%" }}
                    >
                      fl:
                    </label>
                    <input
                      type="text"
                      className="mr-2"
                      placeholder="-----"
                      style={{ width: "40px" }}
                    />
                  </div>
                  <div className="d-flex  mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "40%" }}
                    >
                      crz gw:
                    </label>
                    <input
                      type="text"
                      className="mr-2"
                      placeholder="-----"
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div className="d-flex  mt-2">
                    <label
                      htmlFor=""
                      className="text-right mr-3"
                      style={{ width: "40%" }}
                    >
                      ias :
                    </label>
                    <input
                      type="text"
                      className="mr-2"
                      placeholder="-----"
                      style={{ width: "40px" }}
                    />
                  </div>
                
              </Col>
              <Col>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    ios-c open
                  </label>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    pack-l  on
                  </label>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    pack-r  on
                  </label>
                </div>
              </Col>
            </Row>
            </form>

            <br />

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default EngineData;
