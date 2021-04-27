import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Reminders() {
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

            <h4 className="text-center text-white text-uppercase">Reminders</h4>
            <hr />

            <Form className="m-3">
              <Row>
                <Col md={6} xs={6} className="mr-0 p-0">
                  <div className="ml-3 reminders">
                    <div className="d-flex reminder-inner">
                      <label>Time :</label>
                      <input type="time" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label></label>
                      <input type="time" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label></label>
                      <input type="time" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label></label>
                      <input type="time" />
                    </div>

                    <div className="d-flex reminder-inner">
                      <label>Times To T/D :</label>
                      <input type="time" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>Times To DEST :</label>
                      <input type="time" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>Way Point:</label>
                      <input type="text" placeholder="XXXX" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>LATITUDE:</label>
                      <input type="text" placeholder="XXXX" style={{width:'80px'}} />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>LONGITUDE:</label>
                      <input type="text" placeholder="XXXX" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>LONGITUDE:</label>
                      <input type="text" placeholder="XXXX" />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>FUEL :</label>
                      <input type="text" placeholder="XXXX" style={{width:'80px'}} />
                    </div>
                    <div className="d-flex reminder-inner">
                      <label>ALTITUDE:</label>
                      <input type="text" placeholder="XXXX" style={{width:'60px'}} />
                    </div>
                    <div className="d-flex reminder-inner"></div>
                  </div>
                </Col>
                <Col md={6} xs={6} className="ml-0">
                  <Link to="/crewchange" className="btn btn-1 w-100">
                    Crew Times
                  </Link>
                  <textarea
                    name=""
                    id=""
                    rows="14"
                    style={{ width: "100%" }}
                  ></textarea>
                </Col>
              </Row>
              <br />

              <div
                className="d-flex mt-3"
                style={{ justifyContent: "space-between" }}
              >
                <Form.Check id={`default`} label={`ETA CHANGE`} />
                <p>
                  From
                  <span className="mx-1">
                    <input type="time" />
                  </span>
                  By
                  <span className="mx-1">
                    <input type="text" />
                  </span>
                  Mintues
                </p>
              </div>
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

export default Reminders;
