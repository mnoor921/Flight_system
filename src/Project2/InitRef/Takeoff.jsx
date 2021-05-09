import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Takeoff() {
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
            <div className="main-section p-2">
              <div className="numbering text-right">
                <label htmlFor="" className="tex">
                  1/2
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">takeoff perf</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>flaps</p>
                  <label>5&deg;</label>
                </div>
                <div className="model-indent text-right">
                  <p>v1</p>
                  <label>142kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>red 26k n1 </p>
                  <label>100.3/100.3</label>
                </div>
                <div className="model-indent text-right">
                  <p>vr</p>
                  <label>143kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>cg </p>
                  <label>--.- %</label>
                </div>
                <div className="model-indent text-right">
                  <p>v2</p>
                  <label>150kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>takeoff data </p>
                  <Link className="btn btn-1">request</Link>
                </div>
                <div className="model-indent text-right">
                  <p>gw / tow</p>
                  <label>130.1/ ____</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>intersect </p>
                  <label htmlFor="">-----/ rw15l</label>
                </div>
                <div className="model-indent text-right">
                  <p>to shift</p>
                  <label>rw15l --00ft</label>
                </div>
              </div>

              <div className="d-flex-1">
                <Link to="" className=""></Link>
                <Link to="/Takeoffp2" className="btn btn-1">
                  next
                </Link>
              </div>
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Takeoff;
