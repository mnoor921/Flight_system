import React from "react";
import Header from "../Header";
import Beer from "../../assests/buy_bear.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function UaComm2() {
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

            <h4 className="text-center text-white text-uppercase">Ua comm</h4>

            <hr />
            <Form>
              <Row>
                <Col md={8} xs={12}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Here are Come Text"
                    />
                    <Form.Label>MSG to Dispatcher Only</Form.Label>
                  </Form.Group>
                </Col>
                <Col>
                  <Link to="/uacomm" className="btn btn-1 mt-5">
                    Go Back
                  </Link>
                </Col>
              </Row>
            </Form>

            {/* Footer */}
            <div className="header-label mt-3 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a>
                  <ul className="d-flex left-button float-right">
                    <li>
                      <a href="" className="btn btn-1">
                        Print
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Reset
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Return
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Exit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br/>
            <br/>
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

export default UaComm2;
