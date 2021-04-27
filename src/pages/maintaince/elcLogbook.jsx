import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ElcLogbook() {
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

            <form action="" className="mx-4">
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "20%" }}
                >
                  frm code:
                </label>
                <input
                  type="text"
                  className="mr-2"
                  placeholder="XX"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="d-flex  mt-2">
                <label
                  htmlFor=""
                  className="text-right mr-3"
                  style={{ width: "20%" }}
                >
                  comments:
                </label>
                <textarea
                  type="text"
                  className="mr-2"
                  placeholder="XX"
                  style={{ width: "80%" }}
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

export default ElcLogbook;
