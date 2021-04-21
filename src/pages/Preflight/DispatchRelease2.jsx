import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DispatchRelease2() {
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
              departure release{" "}
            </h4>

            <hr />

            <div className="m-5">
              <Form>
                <Row>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">FLT number:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>

                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">FLT date:</label>
                    <input
                      type="date"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Release NBr:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Aircraft NBr:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">dept / desp :</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Flight Rules :</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>

                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">ALTN1 / Altn2 :</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Fuel (LBS):</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">ATOG</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">capt fuel:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                    

                  <Col md={6} xs={12} className="mt-5">
                    <label htmlFor="">Dispatcher Name:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-5">
                    <label htmlFor="">Caption Name:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Capt emp number:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                  <Col md={6} xs={12} className="mt-2">
                    <label htmlFor="">Capt crew base:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h4>CAPT APPROACH MINS</h4>

                  <Form.Check id={`default-`} label={`full qual `} />
                  <Form.Check id={`default-`} label={`high mins `} />

                  <br />

                  <p>Select Send to accept displayed data</p>
                </div>
              </Form>
            </div>

            

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DispatchRelease2;
