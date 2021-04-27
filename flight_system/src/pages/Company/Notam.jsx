import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Notam() {
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
              Notam <br /> Request
            </h4>
            <hr />

            <Form className="m-3">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <Form.Check id={`default`} label={`Airport Notams`} />
                <p>
                  <label htmlFor="">Airport :</label>
                  <span style={{ margin: "0px 10px", width: "20px" }}>
                    <input type="text" placeholder="XXXX" />
                  </span>
                </p>
              </div>

              <hr />

              <Form.Check
                className="mt-3"
                id={`default`}
                label={`Enroute Notams`}
              />

              <Form.Check
                className="mt-3"
                id={`default`}
                label={`FLIGHT ACE NOTAMS`}
              />

              <Form.Check
                className="mt-3"
                id={`default`}
                label={`FLEET NOTAMS`}
              />

              <hr />

              <Form.Check
                className="mt-3"
                id={`default`}
                label={`Company Notams`}
              />
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

export default Notam;
