import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function AirportIndent() {
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
                  2/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">act rte</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>via</p>
                  <label>idu3</label>

                  <p></p>
                  <label>idu.marcs8</label>
                </div>
                <div className="model-indent text-right">
                  <p>to</p>
                  <label>idu</label>

                  <p></p>
                  <label> criss </label>
                </div>
              </div>
              <p className="text-center">then</p>
              <div className="d-flex-1">
                <div className="model-indent">
                  <label> ------------ </label>
                </div>
                <div className="model-indent text-right">
                  <label>
                    <input type="text" placeholder="[][][][]" />
                  </label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <label> ------------ </label>
                </div>
                <p>route discontintnuity</p>
                <div className="model-indent text-right">
                  <label>----------</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <label> ------------ </label> <br />
                  <label> ils 12r </label>
                </div>

                <div className="model-indent text-right">
                  <label>hasdo</label>
                  <label>rw12r</label>
                </div>
              </div>

              <div className="d-flex-1">
                <Link to="/Rte1" className="btn btn-1">
                  {" "}
                  prev{" "}
                </Link>
                <Link to="/Rte3" className="btn btn-1">
                  Next
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

export default AirportIndent;
