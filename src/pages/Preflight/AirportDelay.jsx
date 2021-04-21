import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function AirportDelay() {
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
              airport delay request
            </h4>

            <hr />
            <br />
            <br />

            <Form>
              <div className="m-5 text-center">
                    <div className="d-flex" style={{ justifyContent: "center" }}>
                        <label style={{ width: "100px" }}>Delay Type:</label>
                        <div className="">
                            <Form.Check
                            style={{ marginLeft: "40px" }}
                            id={`default-`}
                            label={`Inbond hold `}
                            />
                            <Form.Check id={`default-`} label={`taxi out `} />
                        </div>
                    </div>

                    <div className="d-flex mt-5" style={{ justifyContent: "center" }}>
                        <p><label htmlFor="">Airport :</label> <span><input type="text" placeholder="XXXX"/></span></p>
                    </div>

              </div>
            </Form>

            <br />

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

export default AirportDelay;
