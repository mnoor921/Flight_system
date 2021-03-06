import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function FitDuty() {
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
              FIT FOR DUTY REPORT{" "}
            </h4>

            <hr />

            <Form className="mx-5 mt-3">
              <div className="mt-4 fit-duty">
                <label htmlFor="">Entry affirms FITness FOR DUTY :</label>

                <div className="d-flex">
                  <label htmlFor="" className="mt-3">
                    Pilot empoloyee number :
                  </label>
                  <input type="text" placeholder="XXXXXX" />
                </div>

                <div className="d-flex">
                  <label htmlFor="" className="mt-3">
                    Pilot empoloyee number :
                  </label>
                  <input type="text" placeholder="XXXXXX" />
                </div>
                <div className="d-flex">
                  <label htmlFor="" className="mt-3">
                    Pilot empoloyee number :
                  </label>
                  <input type="text" placeholder="XXXXXX" />
                </div>
                <div className="d-flex">
                  <label htmlFor="" className="mt-3">
                    Pilot empoloyee number :
                  </label>
                  <input type="text" placeholder="XXXXXX" />
                </div>
              </div>
            </Form>

            <br />
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

export default FitDuty;
