import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form, Tab, Nav, Sonnet } from "react-bootstrap";
function TakeOff2() {
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
              Takeoff data Request
            </h4>

            <hr />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Form>
                <Row>
                  <Col md={5} sm={5} className="">
                    <label htmlFor="" style={{ fontSize: "18px" }}>
                      Runway Condition :
                    </label>

                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`dry `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`wet `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`clutter `}
                    />
                  </Col>
                  <Col md={7} sm={7}>
                    <label htmlFor="" style={{ fontSize: "18px" }}>
                      clutter type :
                    </label>

                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`none `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`standing water `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`slush `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`dry snow `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`compact snow `}
                    />
                    <Form.Check
                      type="radio"
                      className="mt-3"
                      id={`default-`}
                      label={`wet snow `}
                    />
                  </Col>
                </Row>
              </Form>
            </Tab.Container>

            

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TakeOff2;
