import React from "react";
import Header from "../Header";

import { Container, Row, Col } from "react-bootstrap";

function Vhf() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">Vhf</h4>

            <br />

            <form action="">
              <Row>
                <Col>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      default radio center
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      default radio mode data
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      default radio right
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      default radio mode voice
                    </label>
                  </div>
                </Col>
              </Row>
              <br />
              <hr />
              <label htmlFor="" className="mt-2">
                1456z accars connection established
              </label>
              <br />
              <label htmlFor="" className="mt-2">
                1456z accars connection established
              </label>
              <br />
              <label htmlFor="" className="mt-2">
                1456z accars connection established
              </label>
              <br />
              <label htmlFor="" className="mt-2">
                1456z accars connection established
              </label>
              <br />
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vhf;
