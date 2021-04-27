import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DiversionReport() {
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
              Diversion Report
            </h4>
            <hr />

            <Form className="m-3 diversion">
              <div className="d-flex">
                <label> Diverting to :</label>
                <input type="text" placeholder="XXXX" />
              </div>
              <div className="d-flex">
                <label> Expected On Time :</label>
                <input type="time" />
              </div>

              <div className="d-flex">
                <label>FOB:</label>
                <input type="text" placeholder="XXXX" />
              </div>

              <br />

              <div className="mx-3 d-flex w-100">
                <label htmlFor="">Remarks:</label>
                <textarea name="" id="" placeholder="XXXX" style={{ height: "50%" }} ></textarea>
              </div>
              <br />
            </Form>

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DiversionReport;
