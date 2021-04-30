import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";

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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Satcom;
