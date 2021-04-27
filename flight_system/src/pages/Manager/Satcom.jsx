import React from "react";
import Header from "../Header";

import { Container, Row, Col } from "react-bootstrap";

function Satcom() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">Satcom</h4>

            <br />

            <form action="">
              <br />
              <div className="text-center">
                <label htmlFor="" className="text-center">
                  acars links : <span className="ml-4">available</span>
                </label>
              </div>
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

export default Satcom;
