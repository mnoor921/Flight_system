import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DispatchRelease() {
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
              departure release request
            </h4>

            <hr />

            <div className="m-5">
              <Form>
               
                    <div className="dispatch_release">
                      <div className="d-flex">
                        <label htmlFor="" className="mt-3">
                          Flight Number :
                        </label>
                        <input type="text" placeholder="XXXXX" />
                      </div>
                      <div className="d-flex">
                        <label htmlFor="" className="mt-3">
                          Flight Date :
                        </label>
                        <input type="time" placeholder="XXXXX" />
                      </div>

                      <div className="d-flex">
                        <label htmlFor="" className="mt-3">
                          Departure Airport
                        </label>
                        <input type="text" placeholder="XXXXX" />
                      </div>
                    </div>
                  
              </Form>
            </div>

            <br />
            <br />
            <br />

            <Link to="/dispatchrelease2" className="btn btn-1 float-right">
              Next Page
            </Link>
            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DispatchRelease;
