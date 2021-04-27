import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function SensorStatus() {
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
              SENSOR STATUS
            </h4>

            <hr />

            <form action="">
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  airline id:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XX"
                  style={{ width: "40px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  Registration number:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "70px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  ooo1 state:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "60px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  engine:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "80px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  cnd / air:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "40px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  parking brake:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "90px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  Entry doors:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "90px" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "50%" }}
                >
                  Cargo doors:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XXXXXX"
                  style={{ width: "90px" }}
                />
              </div>
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

export default SensorStatus;
