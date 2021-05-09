import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Acars() {
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
            <div className="main-section p-2">
              <div className="d-flex-1 p-3">
                <div className="">
                  <Link className="btn btn-1">technical</Link> <br />
                </div>

                <Link className="btn btn-1">aoc acars</Link>
              </div>

              <div className="d-flex-1 p-3">
                <Link className="btn btn-1">ats</Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="d-flex-1">
                <div className=""></div>
                <div className="">
                  <label htmlFor="">22:04</label>
                </div>
                <div className="">
                  <label htmlFor="">init*</label>
                </div>
              </div>
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Acars;
