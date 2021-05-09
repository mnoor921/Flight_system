import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function POS2() {
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
                  3/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">pos shift</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>fms-l</p>
                  <label>300&deg;/0.0</label>
                </div>
                <div className="model-indent text-right">
                  <p>fmc-r</p>
                  <label>100&deg;/0.0</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gps-l</p>
                  <label>110&deg;/0.2</label>
                </div>
                <p>gps(2)</p>
                <div className="model-indent text-right">
                  <p>gps-r</p>
                  <label>200&deg;/0.1</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>irs-l</p>
                  <label>120&deg;/0.6</label>
                </div>
                <p>irs (2) </p>
                <div className="model-indent text-right">
                  <p>isr-r</p>
                  <label>250&deg;/0.4</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>rnp/actual</p>
                  <label>1.00/0.05nm</label>
                </div>
                
                <div className="model-indent text-right">
                  <p>radio</p>
                  <label>250 /0.0</label>
                </div>
              </div>

              
              <div className="d-flex-1">
                <Link to="/pos1" className="btn btn-1">prev</Link>
                <Link to="/pos2" className="btn btn-1">nav status</Link>
              </div>
              
              
            </div>
            <Footer/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default POS2;
