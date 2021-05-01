import React from "react";
import Header from "./Header";
import Beer from "../assests/buy_bear.jpeg";
import { Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function CommMenu() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <br />
            <h4 className="text-center text-white">Home Page</h4>
            <br />
            <br />
            <br />
            <br />

            <div className="text-center">
              <label htmlFor="" className="text-center mx-auto">
                if you find this
                <br /> site Helpful <br /> i won't say no to a beer{" "}
              </label>

              <br />
              <br />
              <br />
              <div className=" text-center mx-auto">
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
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommMenu;
