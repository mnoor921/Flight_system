import React from "react";
import Header from "../Header";

import { Container, Row, Col } from "react-bootstrap";

function CommAudit() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">
              Comm Audit
            </h4>
            <hr />

            <br />
            <div className="mx-5">
              <form action="">
                <Row>
                  <Col>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        vhf audit on
                      </label>
                    </div>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        satcom audit on
                      </label>
                    </div>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        hf audit on
                      </label>
                    </div>
                  </Col>
                
                  <Col>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        uplinks on
                      </label>
                    </div>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        downlinks on
                      </label>
                    </div>
                    <div className=" d-flex mt-2">
                      <input type="checkbox" />
                      <label htmlFor="" className="ml-3">
                        all call on
                      </label>
                    </div>
                  </Col>
                
                </Row>
              </form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommAudit;
